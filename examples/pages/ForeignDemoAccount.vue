<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-demo-account :params="params"></foreign-demo-account>
  </div>
</template>
<script>
  import {licenseKey, regWidget, layout, langs} from "../../src/config/account/base";

  export default {
    data() {
      return {
        params: {
          security: { licenseKey },
          regWidget,
          layout
        }
      }
    },

    mounted() {
      this.params.layout.settings = Object.assign({}, this.params.layout.settings, {Lang: langs.zh_tw});
    }
  }
</script>
