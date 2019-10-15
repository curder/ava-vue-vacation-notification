<template>
  <div class="container mx-auto text-left">
    <div class="vacation-demo max-w-xl bg-white rounded-lg overflow-hidden shadow-lg mx-auto p-6">
      <h3>How To Use</h3>
      <div>
        <h3>Configuration</h3>
        <div class="mt-2 block">
          <span class="title">标题 <span class="text-red-600">*</span></span>
          <input class="form-input mt-1 block w-full" placeholder="标题" v-model="params.name">
          <p class="form-help text-xs text-gray-700">通知标题必填</p>
        </div>
        <div class="mt-2 block">
          <span class="title">称呼</span>
          <input class="form-input mt-1 block w-full" placeholder="称呼" v-model="params.title">
          <p class="form-help text-xs text-gray-700">输入通知内容的称呼</p>
        </div>
        <div class="mt-2 block">
          <span class="title">开始时间 <span class="text-red-600">*</span></span>
          <input type="text" class="form-input mt-1 block w-full" placeholder="开始时间" v-model="params.start_time">
          <p class="form-help text-xs text-gray-700">弹窗上线的时间。开始时间大于当前时间，弹窗不展示</p>
        </div>
        <div class="mt-2 block">
          <span class="title">结束时间 <span class="text-red-600">*</span></span>
          <input type="text" class="form-input mt-1 block w-full" placeholder="结束时间" v-model="params.end_time">
          <p class="form-help text-xs text-gray-700">弹窗下线的时间。下线时间小于当前时间，弹窗不展示</p>
        </div>
        <div class="mt-2 block">
          <span class="title">弹窗通告内容</span>
          <div class="mt-1 flex" v-for="(item, index) in params.items" :key="index">
            <input type="text" class="form-textarea block w-full" placeholder="弹窗通告内容" :value="item" @input="changeHandle(index, $event.target.value)" />
            <div class="flex">
              <button class="plus" @click="plusHandle">+</button>
              <button class="minus" @click="minusHandle(index)">-</button>
            </div>
          </div>
        </div>
        <div class="mt-2 block">
          <span class="title">底部关闭按钮</span>
          <div class="mt-2">
            <div class="inline-flex items-center">
              <input type="radio" v-model="params.show_footer_close_button" :value="true" class="form-radio text-indigo-600" name="show_footer_close_button" />
              <span class="ml-2">展示</span>
            </div>
            <div class="ml-3 inline-flex items-center">
              <input type="radio" v-model="params.show_footer_close_button" :value="false" class="form-radio text-green-500" name="show_footer_close_button" />
              <span class="ml-2">不展示</span>
            </div>
          </div>
          <div class="text-xs text-gray-700">如果展示底部关闭按钮，默认「不展示」</div>
        </div>
        <div class="mt-6 block">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded" @click="notifyNow">Notify Now</button>
        </div>
      </div>

      <div>
        <h3>Optional Configuration</h3>
        <div class="mt-2 block">
          <span class="title">是否倒计时</span>
          <div class="mt-2">
            <div class="inline-flex items-center">
              <input type="radio" v-model="params.should_duration" :value="true" class="form-radio text-indigo-600" name="should_duration">
              <span class="ml-2">是</span>
            </div>
            <div class="inline-flex items-center">
              <input type="radio"  v-model="params.should_duration" :value="false" class="form-radio text-green-500" name="should_duration">
              <span class="ml-2">否</span>
            </div>
          </div>
          <div class="text-xs text-gray-700">如果不需要则一直开启不自动关闭，默认值「否」</div>
        </div>
        <div class="mt-2 block" v-if="params.should_duration">
          <span class="title">持续时间（单位：秒）</span>
          <input type="number" class="form-input mt-1 block w-full" placeholder="持续时间" v-model="params.duration">
          <p class="form-help text-xs text-gray-700">如果需要在一段时间内自动关闭，请输入对应的持续时间，时间结束后将自动关闭</p>
        </div>
        <div class="mt-2 block">
          <span class="title">延迟展示时间（单位：秒）</span>
          <input type="number" class="form-input mt-1 block w-full" placeholder="延迟时间" v-model="params.delay_time">
          <p class="form-help text-xs text-gray-700">当满足条件允许弹层时，延迟的时间，让页面有更好的过度</p>
        </div>
        <div class="mt-2 block">
          <span class="title">站点公司名称</span>
          <input class="form-input mt-1 block w-full" placeholder="站点公司名称" v-model="params.company">
          <p class="form-help text-xs text-gray-700">如果不需要展示站点公司名称，则留空 默认值为空</p>
        </div>
        <div class="mt-2 block">
          <span class="title">公告时间</span>
          <input class="form-input mt-1 block w-full" placeholder="公告发布时间" v-model="params.date">
          <p class="form-help text-xs text-gray-700">如果不需要公告时间，则留空 默认值为空</p>
        </div>
      </div>
      <div class="mt-2 block" v-show="showConfiguration">
        <h3>Current Configuration</h3>
        <code class="mt-2">&lt;vacation-notify ref="vacation" :params="params"&gt;&lt;/vacation-notify&gt;

export default {
  // ...
  data() {
    return {
      // ...
      params: {
        name: "{{ this.params.name }}",
        title: "{{ this.params.title }}",
        company: "{{ this.params.company }}",
        date: "{{ this.params.date }}",
        delay_time: "{{ this.params.date }}",
        should_duration: {{ this.params.should_duration }},
        duration: {{ this.params.duration }},
        show_footer_close_button: {{ this.params.show_footer_close_button }},
        start_time: {{ this.params.start_time }},
        end_time: {{ this.params.end_time }},
        items: {{ this.params.items }}
      }
    }
  }
}
        </code>
      </div>
    </div>
    <vacation-notify ref="vacation"></vacation-notify>
  </div>
</template>
<script>
  import moment from 'moment';
  import VacationMixins from "../../../src/mixins/VacationMixin.js";

  export default {
    mixins: [VacationMixins],

    data() {
      return {
        showConfiguration: false,

        params: {
          name: "维护公告", // 标题
          title: "尊敬的客户您好：", // 称呼
          company: "", // 站点公司名称
          date: "", // 时间
          delay_time: 0, //  // 延迟展示时间，单位 S，如果为 0 则立即展示
          should_duration: false, // 是否需要倒计时关闭，如果不需要则一直开启不自动关闭
          duration: 5, // 持续时间，单位 S
          show_footer_close_button: false,
          start_time: moment().add(1, 'seconds').format('YYYY-MM-DD HH:mm:ss'), // 弹层开始时间
          end_time: moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'), // 弹层结束时间
          items: [
            "国庆节期间（10月1日~10月7日）由于银行结算系统维护，将影响出入金服务。",
            "在此期间人民币入金业务可能会遇到轻微延迟，不同银行延迟时间会有所不同。",
            "请合理安排您的资金，确保账户内保证金充足。",
            "由此带来的不便我们深表歉意。",
            "如有疑问，请致电客服：400 050 7282"
          ]
        }
      }
    },

    methods: {
      notifyNow() {
        let { start_time, end_time, delay_time } = this.params;

        if (this.canBeShown(start_time, end_time)) {
          // 判断是否需要延迟展示
          if (delay_time) {
            setTimeout(() => {
              this.$refs.vacation.show();
            }, delay_time * 1000);
          } else {
            this.$refs.vacation.show();
          }
        } else {
          alert('开始时间或者结束时间设置不正确');
        }

        this.showConfiguration = true;
      },

      plusHandle() {
        let items = this.params.items;
        if(items.includes('')) {
          console.log('存在空行，填写完空行再增加');
          return;
        }
        items.push('');
      },

      minusHandle(index) {
        let items = this.params.items;
        if(items.length === 1) {
          console.error('通知内容必须告知');
          return;
        }
        items.splice(index, 1);
      },

      changeHandle(index, newValue) {
        let items = this.params.items;
        items.splice(index, 1, newValue);
      }
    }
  }
</script>
