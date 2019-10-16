<template>
  <div id="avaWidgetContainer"><Loading color="#2882c0" scale="1.2"></Loading></div>
</template>
<script>
  import {
    regType, security, regWidget, layout
  } from '../../config/account/base';

  import LineScalePulseOut from 'vue-loaders/dist/loaders/line-scale-pulse-out.js';

  export default {
    components: {
      Loading: LineScalePulseOut.component,
    },

    props: {
      params: {type: Object, default: {}},
    },

    created() {
       //console.error('components created');
       window.$myava = {};
       window.$myava.regWidget = window.$myava.regType = window.$myava.layout = {};
    },

    mounted() {
      // 默认值和自定义的值整合
      const config = Object.assign(this.getBaseConfig(), this.params);

      const {security, regType, regWidget, layout} = config;

      this.$nextTick(() => {
        const widgetLoader = () => {
          window.$myava = {
            security, regType, regWidget, layout
          };
          const scriptId = `ava_real_and_demo_account`;
          if(!document.getElementById(scriptId)) {
            const script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
            script.src = window.$myava.regWidget.configs.myAvaDomain + "Widgets/MyAvaRegistration/scripts/myAvaRegData.js";
            script.id = scriptId;
            tag.parentNode.insertBefore(script, tag);
          }
        };

        widgetLoader();

        if(typeof window.myAvaRegDataInit === 'function') window.myAvaRegDataInit();

        // 延时 1s 执行
        // setTimeout(() => widgetLoader(), 1000);
      });

    },

    methods: {
      getBaseConfig() {
        return {
          security, regType, regWidget, layout
        }
      },

    }
  }
</script>
<style>
  @import "~vue-loaders/dist/vue-loaders.css";
  #avaWidgetContainer {
    @apply w-auto flex items-center justify-center relative #{!important};
    min-width: 600px;
  }
</style>
