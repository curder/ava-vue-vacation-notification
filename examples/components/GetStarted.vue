<template>
  <div class="text-left mt-10">
    <h2 class="text-3xl">Installation</h2>
    <div class="mt-2">
      <code>yarn add -D @curder/ava-vue-components</code>
    </div>
    <p class="mt-2 block">Or</p>
    <div class="mt-2">
      <code>npm install --save-dev @curder/ava-vue-components</code>
    </div>

    <h3>Register Plugins</h3>
    <div class="mt-2">
      <code>import '@curder/ava-vue-components/dist/main.css'; // 加载css
import Plugin from '@curder/ava-vue-components';
        Vue.use(Plugin);
      </code>
    </div>
  </div>
</template>
