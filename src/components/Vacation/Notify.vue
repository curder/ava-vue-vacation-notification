<template>
  <div class="vacation-notify-component">
    <div class="vacation-notify-header">
      <h4 class="vacation-notify-header-title" v-text="name"></h4>
      <a class="vacation-notify-header-times" @click="closeNotify">&times;</a>
    </div>
    <div class="vacation-notify-body">
      <h3 class="vacation-notify-body-title" v-if="title" v-text="title">
        尊敬的客户
      </h3>
      <div class="vacation-notify-body-content">
        <p v-for="(item, index) in items" :key="index" v-text="item"></p>
        <div class="vacation-notify-body-content-footer" v-if="shouldSeeContentFooter">
          <p class="company" v-if="company" v-text="company">AvaTrade</p>
          <p class="date" v-if="date" v-text="date">2019年1月5日</p>
          <p class="close-tip" v-if="should_duration">
            （<span v-text="duration"></span>秒后弹窗自动关闭）
          </p>
        </div>
      </div>
    </div>
    <div class="vacation-notify-footer" v-if="show_footer_close_button">
      <div class="button-handle">
        <a href="javascript:void(0);" @click="closeNotify">关闭</a>
      </div>
    </div>
  </div>
</template>
<script>
import { bus_event } from "../../config/vacation";
export default {
  props: ["params"],

  data() {
    return {
      ...this.params
    };
  },

  mounted() {
    this.checkItems(); // 检查弹窗配置的数据中 items 数据

    // 监听倒计时事件，修改倒计时变化
    if (this.should_duration) {
      this.$bus.$on(bus_event.duration_changed, ({ duration }) => {
        this.duration = duration;
        if( duration === 0 ) {
          this.$bus.$emit(bus_event.close_notify);
        }
      });
    }
  },

  computed: {
    shouldSeeContentFooter() {
      return this.company || this.date || this.should_duration;
    }
  },

  methods: {
    closeNotify() {
      this.$bus.$emit(bus_event.close_notify);
    },
    checkItems() {
      if (!this.items.length || !(this.items instanceof Array)) {
        console.error("通知的配置数组有误，请检查 params.items 配置");
      }
    }
  }
};

</script>
