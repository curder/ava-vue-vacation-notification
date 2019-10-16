<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-demo-account :params="params"></foreign-demo-account>
  </div>
</template>
<script>
  import {licenseKey, regWidget, layout} from "../../src/config/account/base";

  export default {
    data() {
      return {
        params: {
          security: { licenseKey },
          regWidget,
          layout,
        }
      }
    }
  }
</script>
