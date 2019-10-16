// import 'vue-loaders/dist/vue-loaders.css';
import './assets/sass/index.scss';
import VacationNotify from './components/Vacation/Index.vue';
import ForeignRealAccount from './components/Account/Real.vue';
import ForeignDemoAccount from './components/Account/Demo.vue';
import ForeignLoginAccount from './components/Account/Login.vue';

import Modal from 'vue-js-modal'

const Plugin = {
  // eslint-disable-next-line
  install(Vue, params = {}) {
    Vue.prototype.$bus = new Vue();

    Vue.use(Modal, { componentName: 'modal' });

    // 通知弹窗
    Vue.component('vacation-notify', VacationNotify);

    // 国外注册
    Vue.component('foreign-real-account', ForeignRealAccount); // 真实注册
    Vue.component('foreign-demo-account', ForeignDemoAccount); // 模拟注册
    Vue.component('foreign-login-account', ForeignLoginAccount); // 登陆
  }
}

export default Plugin
