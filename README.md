# Ava Vue Components 

## Installation

```
yarn add -D @curder/ava-vue-components
```

**Or**

```
npm install --save-dev @curder/ava-vue-components
Register global plugins
import Plugin from '@curder/ava-vue-components';
Vue.use(Plugin);
```

## Register component

```
import VacationNotify from '@curder/ava-vue-components/components/Vacation/Index.vue';

export default {
  components: { VacationNotify },
}
```