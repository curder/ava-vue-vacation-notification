<template>
  <div class="vacation-notify-component">
    <div class="vacation-notify-header">
      <h4 class="vacation-notify-header-title" v-text="finish_params.name"></h4>
      <a class="vacation-notify-header-times" @click="closeNotify">&times;</a>
    </div>
    <div class="vacation-notify-body">
      <h3 class="vacation-notify-body-title" v-if="finish_params.title" v-text="finish_params.title">
        尊敬的客户
      </h3>
      <div class="vacation-notify-body-content">
        <p v-for="(item, index) in finish_params.items" :key="index" v-text="item"></p>
        <div class="vacation-notify-body-content-footer" v-if="this.shouldSeeContentFooter">
          <p class="company" v-if="finish_params.company" v-text="finish_params.company">AvaTrade</p>
          <p class="date" v-if="finish_params.date" v-text="finish_params.date">2019年1月5日</p>
          <p class="close-tip" v-if="finish_params.should_duration">
            （<span v-text="finish_params.duration"></span>秒后弹窗自动关闭）
          </p>
        </div>
      </div>
    </div>
    <div class="vacation-notify-footer" v-if="finish_params.show_footer_close_button">
      <div class="button-handle">
        <a href="javascript:void(0);" @click="closeNotify">关闭</a>
      </div>
    </div>
  </div>
</template>
<script>
import { bus_event } from "../config/vacation";
export default {
  props: ["params"],

  data() {
    return {
      finish_params: {}
    };
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        if(newValue) {
          this.finish_params = Object.assign(this.params, newValue); // 配置的默认值
        }
      }
    }
  },

  mounted() {
    this.checkItems(); // 检查弹窗配置的数据中 items 数据

    // 监听倒计时事件，修改倒计时变化
    if (this.finish_params.should_duration) {
      this.$bus.$on(bus_event.duration_changed, ({ duration }) => {
        // this.duration = duration;
        this.$set(this.finish_params, 'duration', duration);
        if( duration === 0 ) {
          this.$bus.$emit(bus_event.close_notify);
        }
      });
    }
  },

  computed: {
    shouldSeeContentFooter() {
      return this.finish_params.company || this.finish_params.date || this.finish_params.should_duration;
    }
  },

  methods: {
    closeNotify() {
      this.$bus.$emit(bus_event.close_notify);
    },
    checkItems() {
      if (!this.finish_params.items.length || !(this.finish_params.items instanceof Array)) {
        console.error("通知的配置数组有误，请检查 params.items 配置");
      }
    }
  }
};

</script>
