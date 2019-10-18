<template>
  <Base :params="custom_params" />
</template>
<script>
  import Base from './Base.vue';
  import { regTypes, langs } from '../../config/account/base';

  export default {
    props: {
      lang: {
        type: String,
        default: langs.default
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

      this.custom_params.layout.settings.Lang = this.lang; // 设置组件语言
    }
  }
</script>
