<template>
  <div id="avaLoginWidgetContainer"><Loading color="#2882c0" scale="1.2"></Loading></div>
</template>
<script>
  import LineScalePulseOut from 'vue-loaders/dist/loaders/line-scale-pulse-out.js';

  import {
    LoginLayout, loginWidget, licenseKey, langs
  } from '../../config/account/base';

  export default {
    components: {
      Loading: LineScalePulseOut.component,
    },

    props: {
      lang: {
        type: String,
        default: langs.default,
      },

      params: {
        type: Object
      }
    },

    mounted() {
      this.$nextTick(() => {
        const loginLoader = () => {
          window.$myava = {};
          window.$myava = window.$myava || {};
          window.$myava.security = {licenseKey};
          window.$myava.LoginLayout = window.$myava.loginWidget = {};
          window.$myava.LoginLayout = {...LoginLayout};
          window.$myava.loginWidget = {...loginWidget};

          window.$myava.LoginLayout.settings.Lang = this.lang;

          const script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
          script.src = window.$myava.loginWidget.configs.myAvaDomain + "Widgets/Login/scripts/myAvaLoginData.js";
          tag.parentNode.insertBefore(script, tag);
        };

        loginLoader();

        // 延时 1s 执行
        // setTimeout(() => widgetLoader(), 1000);
      });
    }

  }
</script>
