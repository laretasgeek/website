// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import 'prismjs/themes/prism.css'
import '@/assets/scss/index.scss'
import DefaultLayout from '~/layouts/Default.vue'
import { ClientApiConstructor } from './types';
import store from './store'


const client: ClientApiConstructor = (Vue, { router, head, appOptions}) => {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  appOptions.store = store

  appOptions.i18n.setLocaleMessage('gl-es', require('./locales/gl-es.json'))
  appOptions.i18n.setLocaleMessage('es-es', require('./locales/es-es.json'))

}

export default client
