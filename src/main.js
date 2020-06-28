// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import 'superfish/dist/js/superfish'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
//引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BaiduMap, {
  ak: 'WYbWDwS8NW7EuxFGqhdYlsF120PhYdSn'
});
//引入echarts
import echarts from "echarts"
Vue.prototype.$echarts = echarts;

import App from './App'
import router from './router'

Vue.config.productionTip = false;
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
