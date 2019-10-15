import './assets/sass/index.scss'
import VacationNotify from './components/Vacation/Index.vue'

import Modal from 'vue-js-modal'

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    Vue.prototype.$bus = new Vue()

    Vue.use(Modal, { componentName: 'modal' })

    Vue.component('vacation-notify', VacationNotify)
  }
}

export default Plugin
