<template>
  <div class="flex justify-center items-center flex-1 text-left">
    <div class="flex flex-col">
      <button @click="newRealAccountHandle"
              class="bg-green-500 hover:bg-green-600 hover:shadow-md text-gray-200 font-semibold px-4 py-2 rounded-lg focus:outline-none">
        New Real Account
      </button>

      <button @click="newDemoAccountHandle"
              class="mt-10 bg-purple-500 hover:bg-purple-600 hover:shadow-md text-gray-200 font-semibold px-4 py-2 rounded-lg focus:outline-none">
        New Demo Account
      </button>

      <button @click="LoginAccountHandle"
              class="mt-10 bg-red-500 hover:bg-red-600 hover:shadow-md text-gray-200 font-semibold px-4 py-2 rounded-lg focus:outline-none">
        Login Account
      </button>

    </div>
    <modal name="real-account"
           :width="600"
           :height="450"
           @opened="openedHandle">
      <foreign-real-account :params="params" :lang="realAccountModalLang"></foreign-real-account>
    </modal>

    <modal name="demo-account"
           :width="600"
           :height="450"
           @opened="openedHandle">
      <foreign-demo-account :params="params" :lang="demoAccountModalLang"></foreign-demo-account>
    </modal>

    <modal name="login-account"
           :width="600"
           :height="450">
      <foreign-login-account :params="params" :lang="loginAccountModalLang"></foreign-login-account>
    </modal>

    <foreign-real-account :params="params" :lang="lang"></foreign-real-account>
  </div>
</template>
<script>
  import {licenseKey, regWidget, layout, langs} from "../../../src/config/account/base";

  export default {
    data() {
      return {
        realAccountModalLang: langs.zh_cn,
        demoAccountModalLang: langs.zh_tw,
        loginAccountModalLang: langs.en,
        lang: langs.zh_cn,
        params: {
          security: { licenseKey },
          regWidget,
          layout,
        }
      }
    },

    methods: {
      newRealAccountHandle() {
        this.$modal.show('real-account');
      },

      newDemoAccountHandle() {
        this.$modal.show('demo-account');
      },

      LoginAccountHandle() {
        this.$modal.show('login-account');
      },

      openedHandle() {
        this.$nextTick(() => {
          if(typeof window.myAvaRegDataInit === 'function') {
            window.myAvaRegDataInit();
          }
        });
      }
    }
  }
</script>
