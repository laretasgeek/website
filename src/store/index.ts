import Vue from 'vue'
import Vuex, { MutationTree } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Theme } from '../types'

Vue.use(Vuex)

export interface StoreState {
  theme: Theme;
  mobileMenu: boolean;
}

const state: StoreState = {
  theme: Theme.Dark,
  mobileMenu: false
}

const mutations: MutationTree<StoreState> = {
  setTheme(store: StoreState, theme: Theme) {
    store.theme = theme
  },
  setMobileMenuVisibility(store: StoreState, state: boolean) {
    store.mobileMenu = state
  }
}

const plugins = []

if ((process as any).isClient) {
  plugins.push(createPersistedState({ key: 'laretasgeek', }))
}

export default new Vuex.Store({
  plugins: plugins,
  state,
  mutations
})
