<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-real-account :params="params" :lang="lang" :show-partner-code="false"></foreign-real-account>
  </div>
</template>
<script>
  import {licenseKey, regWidget, layout, langs} from "../../../src/config/account/base";

  export default {
    data() {
      return {
        lang: langs.zh_cn,
        params: {
          security: { licenseKey },
          regWidget,
          layout,
        }
      }
    }
  }
</script>
