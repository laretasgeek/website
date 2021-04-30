import Vue from 'vue'
import Vuex, { MutationTree } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Theme } from '../types'

Vue.use(Vuex)

export interface StoreState {
  theme: Theme;
}

const state: StoreState = {
  theme: Theme.Dark
}

const mutations: MutationTree<StoreState> = {
  setTheme(store: StoreState, theme: Theme) {
    store.theme = theme
  }
}

export default new Vuex.Store({
  plugins: [
    createPersistedState({ key: 'laretasgeek', })
  ],
  state,
  mutations
})
