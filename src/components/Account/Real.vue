<template>
  <Base :params="custom_params" />
</template>
<script>
  import Base from './Base.vue';
  import { regTypes } from '../../config/account/base';

  export default {
    props: {
      params: {
        type: Object,
        default: {}
      }
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
      const regType = regTypes.real;

      this.custom_params = Object.assign(this.params, { regType });
    }
  }
</script>
