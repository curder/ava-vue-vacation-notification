// import 'vue-loaders/dist/vue-loaders.css';
import './assets/sass/index.scss';
import VacationNotify from './components/Index.vue';

import Modal from 'vue-js-modal'

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    Vue.prototype.$bus = new Vue();

    Vue.use(Modal, { componentName: 'modal' });

    // 通知弹窗
    Vue.component('vacation-notify', VacationNotify);
  }
}

export default Plugin
