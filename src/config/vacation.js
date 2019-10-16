const modal_name = 'vacation-notify'

const bus_event = {
  open_notify: 'open-notify',
  close_notify: 'close-notify',
  duration_changed: 'duration-changed',
  // clear_interval: 'clear-interval',
}

// 弹窗默认参数
const default_params = {
  name: '维护公告', // 标题
  title: '尊敬的客户您好：', // 称呼
  company: '', // 站点公司名称
  date: '', // 时间
  delay_time: 0, // 延迟展示时间，单位 S，如果为 0 则立即展示
  scroller: false, // 是否拥有滚动条，默认为false，不允许滚动
  should_duration: false, // 是否需要倒计时关闭，如果不需要则一直开启不自动关闭
  duration: 5, // 持续时间，单位 S
  start_time: '2019-9-26 06:00:00', // 弹层开始时间
  end_time: '2019-10-29 00:00:00', // 弹层结束时间
  show_footer_close_button: false, // 是否展示底部关闭按钮
  items: [
    '在此期间人民币入金业务可能会遇到轻微延迟，不同银行延迟时间会有所不同。',
    '请合理安排您的资金，确保账户内保证金充足。',
    '由此带来的不便我们深表歉意。'
  ]
}

export { modal_name, bus_event, default_params }
