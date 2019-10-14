<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-5xl text-gray-600 font-semibold">Ava Vue Components</h1>
      <p class="text-3xl text-gray-300 tracking-wider font-semibold">some Components for ava websites.</p>
      <GetStarted />
    </div>
  </div>
</template>
<script type="text/javascript">
import GetStarted from '../components/GetStarted.vue';

export default {
  components: {
    GetStarted,
  }
}

</script>
