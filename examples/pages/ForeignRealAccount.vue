<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <foreign-real-account :params="params"></foreign-real-account>
  </div>
</template>
<script>
  import {licenseKey, regTypes, regWidget, layout} from "../../src/config/account/base";

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
