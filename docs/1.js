(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{235:function(t,a,s){"use strict";s.r(a);s(241),s(242);var e=s(0),i=s.n(e),r={mixins:[s(50).a],data:function(){return{showConfiguration:!1,params:{name:"维护公告",title:"尊敬的客户您好：",company:"",date:"",delay_time:0,scroller:!0,should_duration:!1,duration:5,show_footer_close_button:!1,start_time:i()().add(1,"seconds").format("YYYY-MM-DD HH:mm:ss"),end_time:i()().add(1,"days").format("YYYY-MM-DD HH:mm:ss"),items:["国庆节期间（10月1日~10月7日）由于银行结算系统维护，将影响出入金服务。","在此期间人民币入金业务可能会遇到轻微延迟，不同银行延迟时间会有所不同。","请合理安排您的资金，确保账户内保证金充足。","由此带来的不便我们深表歉意。","如有疑问，请致电客服：400 050 7282"]}}},methods:{notifyNow:function(){var t=this,a=this.params,s=a.start_time,e=a.end_time,i=a.delay_time;this.canBeShown(s,e)?i?setTimeout((function(){t.$refs.vacation.show()}),1e3*i):this.$refs.vacation.show():alert("开始时间或者结束时间设置不正确"),this.showConfiguration=!0},plusHandle:function(){var t=this.params.items;t.includes("")?console.log("存在空行，填写完空行再增加"):t.push("")},minusHandle:function(t){var a=this.params.items;1!==a.length?a.splice(t,1):console.error("通知内容必须告知")},changeHandle:function(t,a){this.params.items.splice(t,1,a)}}},o=s(2),n={components:{Usage:Object(o.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container mx-auto text-left"},[s("div",{staticClass:"vacation-demo max-w-xl bg-white rounded-lg overflow-hidden shadow-lg mx-auto p-6"},[s("h3",[t._v("How To Use")]),t._v(" "),s("div",[s("h3",[t._v("Configuration")]),t._v(" "),s("div",{staticClass:"mt-2 block"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.name,expression:"params.name"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"标题"},domProps:{value:t.params.name},on:{input:function(a){a.target.composing||t.$set(t.params,"name",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("通知标题必填")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("称呼")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.title,expression:"params.title"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"称呼"},domProps:{value:t.params.title},on:{input:function(a){a.target.composing||t.$set(t.params,"title",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("输入通知内容的称呼")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.start_time,expression:"params.start_time"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"开始时间"},domProps:{value:t.params.start_time},on:{input:function(a){a.target.composing||t.$set(t.params,"start_time",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("弹窗上线的时间。开始时间大于当前时间，弹窗不展示")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.end_time,expression:"params.end_time"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"text",placeholder:"结束时间"},domProps:{value:t.params.end_time},on:{input:function(a){a.target.composing||t.$set(t.params,"end_time",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("弹窗下线的时间。下线时间小于当前时间，弹窗不展示")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("弹窗通告内容")]),t._v(" "),t._l(t.params.items,(function(a,e){return s("div",{key:e,staticClass:"mt-1 flex"},[s("input",{staticClass:"form-textarea block w-full",attrs:{type:"text",placeholder:"弹窗通告内容"},domProps:{value:a},on:{input:function(a){return t.changeHandle(e,a.target.value)}}}),t._v(" "),s("div",{staticClass:"flex"},[s("button",{staticClass:"plus",on:{click:t.plusHandle}},[t._v("+")]),t._v(" "),s("button",{staticClass:"minus",on:{click:function(a){return t.minusHandle(e)}}},[t._v("-")])])])}))],2),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("底部关闭按钮")]),t._v(" "),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.show_footer_close_button,expression:"params.show_footer_close_button"}],staticClass:"form-radio text-indigo-600",attrs:{type:"radio",name:"show_footer_close_button"},domProps:{value:!0,checked:t._q(t.params.show_footer_close_button,!0)},on:{change:function(a){return t.$set(t.params,"show_footer_close_button",!0)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("展示")])]),t._v(" "),s("div",{staticClass:"ml-3 inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.show_footer_close_button,expression:"params.show_footer_close_button"}],staticClass:"form-radio text-green-500",attrs:{type:"radio",name:"show_footer_close_button"},domProps:{value:!1,checked:t._q(t.params.show_footer_close_button,!1)},on:{change:function(a){return t.$set(t.params,"show_footer_close_button",!1)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("不展示")])])]),t._v(" "),s("div",{staticClass:"text-xs text-gray-700"},[t._v("如果展示底部关闭按钮，默认「不展示」")])]),t._v(" "),s("div",{staticClass:"mt-6 block"},[s("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded",on:{click:t.notifyNow}},[s("div",{staticClass:"flex items-center justify-center"},[t._v("Notify Now"),s("svg",{staticClass:"ml-2 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}})])])])])]),t._v(" "),s("div",[s("h3",[t._v("Optional Configuration")]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("是否倒计时")]),t._v(" "),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.should_duration,expression:"params.should_duration"}],staticClass:"form-radio text-indigo-600",attrs:{type:"radio",name:"should_duration"},domProps:{value:!0,checked:t._q(t.params.should_duration,!0)},on:{change:function(a){return t.$set(t.params,"should_duration",!0)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("是")])]),t._v(" "),s("div",{staticClass:"inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.should_duration,expression:"params.should_duration"}],staticClass:"form-radio text-green-500",attrs:{type:"radio",name:"should_duration"},domProps:{value:!1,checked:t._q(t.params.should_duration,!1)},on:{change:function(a){return t.$set(t.params,"should_duration",!1)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("否")])])]),t._v(" "),s("div",{staticClass:"text-xs text-gray-700"},[t._v("如果不需要则一直开启不自动关闭，默认值「否」")])]),t._v(" "),t.params.should_duration?s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("持续时间（单位：秒）")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.duration,expression:"params.duration"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"number",placeholder:"持续时间"},domProps:{value:t.params.duration},on:{input:function(a){a.target.composing||t.$set(t.params,"duration",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("如果需要在一段时间内自动关闭，请输入对应的持续时间，时间结束后将自动关闭")])]):t._e(),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("是否允许页面滚动")]),t._v(" "),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.scroller,expression:"params.scroller"}],staticClass:"form-radio text-indigo-600",attrs:{type:"radio",name:"scroller"},domProps:{value:!0,checked:t._q(t.params.scroller,!0)},on:{change:function(a){return t.$set(t.params,"scroller",!0)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("是")])]),t._v(" "),s("div",{staticClass:"inline-flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.scroller,expression:"params.scroller"}],staticClass:"form-radio text-green-500",attrs:{type:"radio",name:"scroller"},domProps:{value:!1,checked:t._q(t.params.scroller,!1)},on:{change:function(a){return t.$set(t.params,"scroller",!1)}}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v("否")])])]),t._v(" "),s("div",{staticClass:"text-xs text-gray-700"},[t._v("是否禁止页面滚动，默认是「否」")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("延迟展示时间（单位：秒）")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.delay_time,expression:"params.delay_time"}],staticClass:"form-input mt-1 block w-full",attrs:{type:"number",placeholder:"延迟时间"},domProps:{value:t.params.delay_time},on:{input:function(a){a.target.composing||t.$set(t.params,"delay_time",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("当满足条件允许弹层时，延迟的时间，让页面有更好的过度")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("站点公司名称")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.company,expression:"params.company"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"站点公司名称"},domProps:{value:t.params.company},on:{input:function(a){a.target.composing||t.$set(t.params,"company",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("如果不需要展示站点公司名称，则留空 默认值为空")])]),t._v(" "),s("div",{staticClass:"mt-2 block"},[s("span",{staticClass:"title"},[t._v("公告时间")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.date,expression:"params.date"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"公告发布时间"},domProps:{value:t.params.date},on:{input:function(a){a.target.composing||t.$set(t.params,"date",a.target.value)}}}),t._v(" "),s("p",{staticClass:"form-help text-xs text-gray-700"},[t._v("如果不需要公告时间，则留空 默认值为空")])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfiguration,expression:"showConfiguration"}],staticClass:"mt-2 block"},[s("h3",[t._v("Current Configuration")]),t._v(" "),s("code",{staticClass:"mt-2"},[t._v('<vacation-notify ref="vacation" :params="params"></vacation-notify>\n\nexport default {\n  // ...\n  data() {\n    return {\n      // ...\n      params: {\n        name: "'+t._s(this.params.name)+'",\n        title: "'+t._s(this.params.title)+'",\n        company: "'+t._s(this.params.company)+'",\n        date: "'+t._s(this.params.date)+'",\n        delay_time: "'+t._s(this.params.date)+'",\n        should_duration: '+t._s(this.params.should_duration)+",\n        duration: "+t._s(this.params.duration)+",\n        scroller: "+t._s(this.params.scroller)+",\n        show_footer_close_button: "+t._s(this.params.show_footer_close_button)+",\n        start_time: "+t._s(this.params.start_time)+",\n        end_time: "+t._s(this.params.end_time)+",\n        items: "+t._s(this.params.items)+"\n      }\n    }\n  }\n}\n        ")])])]),t._v(" "),s("vacation-notify",{ref:"vacation",attrs:{params:t.params}})],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"title"},[this._v("标题 "),a("span",{staticClass:"text-red-600"},[this._v("*")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"title"},[this._v("开始时间 "),a("span",{staticClass:"text-red-600"},[this._v("*")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"title"},[this._v("结束时间 "),a("span",{staticClass:"text-red-600"},[this._v("*")])])}],!1,null,null,null).exports}},l=Object(o.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"flex justify-center items-center flex-1 text-center"},[a("Usage")],1)}),[],!1,null,null,null);a.default=l.exports},241:function(t,a,s){"use strict";var e=s(13),i=s(183)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(184)("includes")},242:function(t,a,s){"use strict";var e=s(13),i=s(243);e(e.P+e.F*s(245)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},243:function(t,a,s){var e=s(244),i=s(14);t.exports=function(t,a,s){if(e(a))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(t))}},244:function(t,a,s){var e=s(24),i=s(34),r=s(5)("match");t.exports=function(t){var a;return e(t)&&(void 0!==(a=t[r])?!!a:"RegExp"==i(t))}},245:function(t,a,s){var e=s(5)("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(s){try{return a[e]=!1,!"/./"[t](a)}catch(t){}}return!0}}}]);