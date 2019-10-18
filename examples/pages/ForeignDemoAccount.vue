<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-demo-account :params="params" :lang="lang"></foreign-demo-account>
  </div>
</template>
<script>
  import {licenseKey, regWidget, layout, langs} from "../../src/config/account/base";

  export default {
    data() {
      return {
        lang: langs.zh_tw,
        params: {
          security: { licenseKey },
          regWidget,
          layout
        }
      }
    },

    mounted() {
    }
  }
</script>
