<template>
  <modal :name="modal_name" :clickToClose="false" :min-width="310" :max-width="500" width="50%" :adaptive="true" height="auto">
    <notify :params="finish_params"></notify>
  </modal>
</template>
<script>
import Notify from "./Notify.vue";
import { modal_name, bus_event, default_params } from "../../config/vacation";
import VacationMixins from "../../mixins/VacationMixin.js";

export default {
  props: ["params"],

  mixins: [VacationMixins],

  components: { Notify },

  data() {
    return {
      modal_name,
      finish_params: {} // 最终配置
    };
  },
  watch: {
    params: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.finish_params = Object.assign(this.params, newValue); // 配置的默认值
      }
    }
  },

  mounted() {
    // this.finish_params = Object.assign(default_params, this.params); // 配置的默认值

    let { start_time, end_time, delay_time } = this.finish_params;

    // 判断弹窗是否展示
    if (this.canBeShown(start_time, end_time)) {
      // 判断是否需要延迟展示
      if (delay_time) {
        let that = this;
        setTimeout(() => {
          that.show();
        }, delay_time * 1000);
      } else {
        this.show();
      }
    }

    // Esc 关闭弹层
    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.hide(); // how to hide any open modal?
      }
    });

    // 监听弹层关闭事件
    this.$bus.$on(bus_event.close_notify, () => {
      this.hide();
    });
  },

  methods: {
    show() {
      let { should_duration, duration } = this.finish_params;

      if (should_duration) this.countDown(duration, true); // 是否需要倒计时
      this.$modal.show(modal_name); // 弹层的显示
    },
    hide() {
      this.$modal.hide(modal_name); // 弹层的隐藏
      clearInterval(this.vacation_notify_timer); // 清除定时器
    }
  }
};

</script>
