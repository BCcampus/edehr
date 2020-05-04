import { Router } from 'express'
import { getAdminPassword, generateAdminPassword } from '../../helpers/admin'
import { adminLimiter } from '../../helpers/middleware'
import { Text } from '../../config/text'

const jwt = require('jsonwebtoken')
const debug = false

export default class AuthController {

  constructor (config) {
    this.tokenSecret = config.authTokenSecret
    if(debug) console.log('authController -- tokenSecret', this.tokenSecret)
  }
  /**
 * @method _adminLogin 
 * Receives the admin's password and, if it is valid, it returns a new token which is
 * authenticated for an admin. Handles the /admin end point
 * @param {*} req 
 * @param {*} res 
 * 
 * @description The adminPass is received in the request's Body
 * and it also receives the authorization in the headers. If adminPass is a match with the adminToken,
 * then it generates a new token and responds with it.
 * 
 * @returns {JSON} token - if the request is successful (200 status).
 * @returns {String} missingTokenError - if either the token or password is missing (401 status)
 * @returns {String} passwordMismatch - if adminPass doesn't match with adminToken. (201 status)
 * 
 */
  _adminLogin (req, res) {
    if (debug) console.log('authController -- _adminLogin')
    const { adminPass } = req.body
    let adminToken = getAdminPassword()
    const { authorization } = req.headers
    if (!adminPass && !authorization) {
      res.status(401).send(Text.REQUIRED_ADMIN)
    } else {
      if (debug) console.log('adminPass >> adminToken', adminPass, adminToken)
      try {
        if (adminToken) {
          if (adminPass === adminToken) {
            const payload = this.authenticate(authorization)
            const adminPayload = Object.assign({}, payload, { adminPassword : adminPass})
            const newToken = this.createToken(adminPayload)
            return res.status(200).json({token: newToken})
          } else {
            return res.status(401).send(Text.EXPIRED_ADMIN)
          }
        } else {
          generateAdminPassword()
          return res.status(201).send('The password has been created')
        }
      }
      catch (err) {
        if (debug) console.log('_adminLogin threw', err)
        return res.status(401).send(Text.EXPIRED_ADMIN)
      }
    }
  }

  _adminValidate (req, res) {
    const { authorization } = req.headers
    console.log('req.headers >> ', req.headers)
    if (debug) console.log('_adminValidate', authorization)
    if (authorization) {
      if(debug) console.log('auth >> ', authorization)
      try {
        const result = this.authenticate(authorization)
        if (debug) console.log('result >> ', result)
        if (result.adminPassword) {
          const adminPassword = getAdminPassword()
          if (result.adminPassword === adminPassword) {
            return res.status(200).send(/*success*/)
          }
          return res.status(401).send(Text.INVALID_TOKEN)
        }
        return res.status(403).send(Text.NOT_PERMITTED)
        
      } catch (err) {
        return res.status(500).send(err)
      }

    } else {
      return res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  /**
 * @method _getAuthToken
 * Retrieves the authToken from the refreshToken (handles the /refresh end point)
 * @param {*} req - handler's request object
 * @param {*} res - handler's response object
 *  
 * @description This function receives the request and response objects from the API call 
 * and it returns 200 with the  if the request is 
 * 
 * @returns {JSON} token -  if the refreshToken is valid (200 status)
 * @returns {String} error -  if any error occurs (401 status), which includes the 
 * refresh token being expired.
 * 
 */
  _getAuthToken (req, res) {
    if (debug) console.log('authController -- _getAuthToken')
    const { refreshToken } = req.body
    if(refreshToken) {
      try {
        const result = this.validateToken(refreshToken)
        const { token } = result
        if (debug) console.log('tokenValidated >> ', token)
        res.status(200).json({token})
      } catch(err) {
        if (debug) console.log('validate token threw >> ', err)
        // This arguably returns 401 in this case. As the validateToken can throw if the token has expired,
        // which is a use case of the refresh token.
        res.status(401).send(Text.EXPIRED_TOKEN)
      }
    } else {
      if(debug) console.log(Text.TOKEN_REQUIRED, req.body)
      res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  /**
 * @method _getTokenContent
 * Gets the payload from the authToken (handles the / end point)
 * @param {*} req 
 * @param {*} res 
 * 
 * @description it gets the authenticator token in req.headers.authorization
 * and it unwraps it using authenticate and, if the token is properly validated, it returns the payload 
 * (currently visitId)
 * 
 * @returns {Object} result - the result of getting the token data (status 200)
 * @returns {String} missingTokenError - an error message whether the token is missing (status 401)
 * @returns {String} tokenVerificationError - if an error occurs when verifying the token (status 500)
 */
  _getTokenContent (req, res) {
    if (debug) console.log('authController -- _getTokenContent')
    if(req.headers.authorization) {
      try {
        const result = this.authenticate(req.headers.authorization)
        res.status(200).json(result)
      } catch(err) {
        if (debug) console.log('_getTokenContent threw >> ', err)
        // Here this can be 500, since it catches and error from the jwt.verify function
        res.status(500).send(Text.SYS_ERROR)
      }
    } else {
      if(debug) console.log('AuthController ._getTokenContent --- Token is required!')
      res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  /**
   * @method authenticate
   * Unwraps the request and attempts to validate its token
   * @param {*} token 
   * @description unwraps the token from the Bearer ${token} structure and then 
   * passes it to validateToken
   * 
   * @returns {*} a function call to validateToken
   * @throws {*} token validation errors from jwt.verify
   *
   */
  authenticate (token) { 
    if(debug) console.log('authController -- authenticate')
    const sliced = token.replace('Bearer ', '')
    return this.validateToken(sliced)
  }

  createToken (data) {
    if(debug) console.log('authController -- createToken')
    return jwt.sign(data, this.tokenSecret)
  }

  createRefreshToken (token) {
    if(debug) console.log('authController -- createRefreshToken')
    //set to expire in 1 minute
    return jwt.sign({token}, this.tokenSecret, { expiresIn: '1m'})
  }
  
  
  /**
   * @method validateToken
   * Validates the given token
   * @param {String} token 
   * @description this is a wrapper for jwt.verify. 
   * Which is a way of validating the token upon the jwt package.
   * This function, however, can throw several errors; a good example would be whether the token 
   * is expired, which commonly happens for the refresh token. 
   * @returns {*} the results of calling jwt.verify on the token string.
   * This may throw errors if the token is invalid or expired.
   * 
   * @throws {*} token validation errors from jwt.verify
   * @inheritdoc Upon the (Synchronous) If a callback is not supplied, function acts synchronously.
   * Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid.
   * If not, it will throw the error. 
   * (See more in https://github.com/auth0/node-jsonwebtoken)
   */
  validateToken (token) {
    const results = jwt.verify(token, this.tokenSecret)
    if (debug) console.log('authController -- validateToken', results)
    return results
  }

  route () {
    const router = new Router()
    router.post('/', (req, res) => {
      this._getTokenContent(req, res)
    })
    router.post('/admin', adminLimiter, (req, res) => {
      this._adminLogin(req, res)
    })

    router.post('/admin/validate', (req, res) => {
      this._adminValidate(req, res)
    })

    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    }) 
    return router
  }
}
