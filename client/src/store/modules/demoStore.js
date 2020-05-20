import DemoHelper from '../../helpers/demo-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'
import StoreHelper from '../../helpers/store-helper'

const demoHelper = new DemoHelper()

const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

const _setDemoUser = (user) => localStorage.setItem(sKeys.SELECTED_DEMO_USER, user)

const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)

// const _getDemoUser = () => localStorage.getItem(sKeys.SELECTED_DEMO_USER)


const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoUser: function () {
    // return _getDemoUser()
    return state.selectedUser
  },
  ltiData: function () {
    return state.ltiData
  }
}

const state = {
  ltiData: [],
  selectedUser: {}
}

const actions = {
  createToolConsumer: function () {
    return demoHelper.createToolConsumer()
      .then(res => {
        const { demoToken } = res.data
        _setDemoToken(demoToken)
        setAuthHeader(demoToken)
        return Promise.resolve(demoToken)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  fetchDemoData: function ({ commit }) {
    return demoHelper.fetchDemoData() 
      .then(res => {
        const { ltiData } = res.data
        console.log('ltiData >> ', ltiData)
        commit('setLTIData', ltiData)
        return Promise.resolve(ltiData)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  selectLTIUser: function ({commit}, { ltiData } ) {
    // _setDemoUser(ltiData)
    console.log(typeof ltiData)
    return commit('setDemoUser', ltiData)
  },
  setLTIUser: function (none, { ltiData, assignment }) {
    const demoToken = StoreHelper.getDemoToken()
    return demoHelper.setLTIUser(ltiData, assignment, demoToken)
      .then(res => {
        const { refreshToken, apiUrl } = res.data
        StoreHelper.fetchAndStoreAuthToken(refreshToken, apiUrl)
          .then(() => {
            _setDemoUser(ltiData)
            return Promise.resolve({ refreshToken, apiUrl })
          })
      }).catch(err => {
        return Promise.reject(err)
      })
  },

  setDemoToken: function (none, { demoToken }) {
    _setDemoToken(demoToken)
  },
  // setDemoUser: function (none, { user }) {
  //   _setDemoUser(user)
  // },
  setDemoData: function (none, { data }) {
    _setDemoData(data)
  }
}

const mutations = {
  setLTIData: function (none, data) {
    state.ltiData = data
  },
  setDemoUser: function (none, data) {
    state.selectedUser = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}