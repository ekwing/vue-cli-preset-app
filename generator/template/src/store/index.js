import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: {},
    user: {}
  },
  mutations: {
    [types.SET_HEADER] (state, style = {}) {
      style['background-color'] = style['background-color'] || '#ffffff'
      style.color = style.color || '#47555f'
      style.title = style.title || ''
      state.header = style
    },
    [types.SET_USER] (state, data) {
      state.user = data
    }
  },
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== 'production'
})
