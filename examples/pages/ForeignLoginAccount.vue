<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-login-account :params="params"></foreign-login-account>
  </div>
</template>
<script>
  import {licenseKey, loginWidget, LoginLayout} from "../../src/config/account/base";

  export default {
    data() {
      return {
        params: {
          security: { licenseKey },
          loginWidget,
          LoginLayout
        }
      }
    }
  }
</script>
