import Vue from 'vue'
import Vuex from 'vuex'

// import {getUser} from '@/api'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      count: 0,
      nombre:' sebastiano',
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })