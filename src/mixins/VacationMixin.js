import { bus_event } from '../config/vacation'

const mixin = {
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
  }
}

const checkDateValid = date => {
  const start_string = '开始时间'
  const end_string = '结束时间'
  const string = '您设置的弹窗的{DATE}有误，请检查后重新输入,建议输入的格式为：YYYY-mm-dd HH:ii:ss'
  var reg = new RegExp(/^\d{4}-((0?[1-9])|(1[0-2]))-((0?[1-9])|([12]\d)|(3[01])) (([01]?\d)|(2[0-3])):[0-5]\d:[0-5]\d$/);
  if (!reg.test(date.start_time)) {
    console.error(string.replace('{DATE}', start_string))
  }
  if (!reg.test(date.end_time)) {
    console.error(string.replace('{DATE}', end_string))
  }
}

export default mixin
