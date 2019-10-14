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

    <h3>Register global plugins</h3>
    <div class="mt-2">
      <code>import Plugin from '@curder/ava-vue-components';
        Vue.use(Plugin);
      </code>
    </div>
    <h3>Register component</h3>
    <div class="mt-2">
      <code>import VacationNotify from '@curder/ava-vue-components/components/Vacation/Index.vue';

export default {
    components: { VacationNotify },
}
      </code>
    </div>
  </div>
</template>
