<template>
  <modal :name="modal_name"
         :clickToClose="false"
         :min-width="310"
         :max-width="500"
         width="50%"
         :adaptive="true"
         height="auto"
         @before-open="beforeOpen"
         @before-close="beforeClose">
    <notify :params="finish_params" v-if="Object.keys(finish_params).length"></notify>
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
      modal_shown: false,
      vacation_notify_timer: null,
      finish_params: {} // 最终配置
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

  created() {
    // 监听键盘的 Esc 事件
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.hide();
      }
    };

    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.addEventListener('keydown', escapeHandler);
    });
  },

  mounted() {
    this.finish_params = Object.assign(default_params, this.params); // 配置的默认值

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

    // 监听弹层关闭事件
    this.$bus.$on(bus_event.close_notify, () => {
      this.hide();
    });
  },

  methods: {
    show() {
      let { should_duration, duration } = this.finish_params;

      if (should_duration) this.setTime(duration, true); // 是否需要倒计时
      this.$modal.show(modal_name); // 弹层的显示
    },
    hide() {
      this.$modal.hide(modal_name); // 弹层的隐藏

      if(this.vacation_notify_timer) {
        this.stopTime();
      } // 清除定时器
    },

    setTime(duration = false, is_show = false) {
      let that = this;
      // 倒计时
      if (!is_show || duration === false) return;
      this.vacation_notify_timer = setInterval(() => {
        duration--;
        that.$bus.$emit(bus_event.duration_changed, { duration });
      }, 1000);
    },

    stopTime() {
      if (this.vacation_notify_timer) {
        clearInterval(this.vacation_notify_timer)
      }
    },

    beforeOpen() {
      let { scroller } = this.finish_params;
      !scroller && document.body.style.setProperty('overflow', 'hidden'); // 隐藏滚动条
      this.modal_shown = true;
    },

    beforeClose() {
      let { scroller } = this.finish_params;
      !scroller && document.body.style.removeProperty('overflow'); // 还原滚动条
      this.modal_shown = false;
    }
  }
};

</script>
