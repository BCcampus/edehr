import axios from 'axios'
import StoreHelper from './store-helper'
import { Text } from './ehr-text'

export default class AuthHelper {
// Overall auth logic
  getToken (refreshToken) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
  }

  getData () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/`
    return axios.post(url, null)
      .catch(err => {
        throw Text.INVALID_TOKEN(err)
      })
  }
  // Admin requests
  adminLogin (adminPass) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/admin`
    return axios.post(url, {adminPass})
  }

  adminValidate () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/admin/validate`
    return axios.post(url)
  }
}