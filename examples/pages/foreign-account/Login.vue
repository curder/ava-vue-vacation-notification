<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-login-account :params="params" :lang="lang"></foreign-login-account>
  </div>
</template>
<script>
  import {licenseKey, loginWidget, LoginLayout, langs} from "../../../src/config/account/base";

  export default {
    data() {
      return {
        lang: langs.default,

        params: {
          security: { licenseKey },
          loginWidget,
          LoginLayout
        }
      }
    }
  }
</script>
