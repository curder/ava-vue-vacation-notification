import moment from 'moment'
import { bus_event } from '../config/vacation'

const mixin = {
  data() {
    return {
      vacation_notify_timer: null
    }
  },

  methods: {
    canBeShown(start_time, end_time) { // 是否能展示弹窗
      checkDateValid({ start_time, end_time }) // 检查时间格式是否正确
      // 检测是否允许弹出
      const now_timestamp = Date.parse(new Date())
      const start_timestamp = Date.parse(start_time.replace(/-/g, '/'))
      const end_timestamp = Date.parse(end_time.replace(/-/g, '/'))

      if (now_timestamp > start_timestamp && now_timestamp < end_timestamp) {
        return true
      }
      return false
    },
    countDown(duration = false, is_show = false) {
      this.$bus.$on('clear-interval', () => {
        alert()
      })
      // 倒计时
      if (!is_show || duration === false) return
      this.vacation_notify_timer = setInterval(() => {
        if (duration > 0) {
          --duration
          this.$bus.$emit(bus_event.duration_changed, { duration })
        } else {
          clearInterval(this.vacation_notify_timer)
        }
      }, 1000)

      setTimeout(() => {
        this.$bus.$emit(bus_event.close_notify) // 关闭弹层
      }, duration * 1000)
    }
  }
}

const checkDateValid = date => {
  const start_string = '开始时间'
  const end_string = '结束时间'
  const string = '您设置的弹窗的{DATE}有误，请检查后重新输入,建议输入的格式为：YYYY-mm-dd HH:ii:ss'
  if (!moment(date.start_time).isValid()) {
    console.error(string.replace('{DATE}', start_string))
  }
  if (!moment(date.end_time).isValid()) {
    console.error(string.replace('{DATE}', end_string))
  }
}

export default mixin
