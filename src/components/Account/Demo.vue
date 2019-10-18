<template>
  <Base :params="custom_params" />
</template>
<script>
  import Base from './Base.vue';
  import { regTypes, langs, regWidget } from '../../config/account/base';

  export default {
    props: {
      lang: {
        type: String,
        default: langs.default
      },
      showPartnerCode: {
        type: Boolean,
        default: regWidget.configs.ShowPartnerCode,
      },

      params: {
        type: Object,
        default: {}
      },
    },

    data() {
      return {
        custom_params: {},
      };
    },

    components: {
      Base
    },

    created() {
      const regType = regTypes.demo;

      this.custom_params = Object.assign(this.params, { regType });

      // 组件自定义属性
      this.custom_params.layout.settings.Lang = this.lang; // 设置组件语言
      this.custom_params.regWidget.configs.ShowPartnerCode = this.showPartnerCode; // 是否展示代理号输入框
    },
  }
</script>
