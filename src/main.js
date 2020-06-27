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
import BaiduMap from 'vue-baidu-map'
// import BmScale from 'vue-baidu-map/components/controls/Scale'
// import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
// import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
// import BmMarker from 'vue-baidu-map/components/overlays/Marker'
// import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'

import App from './App'
import router from './router'

Vue.config.productionTip = false;
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BaiduMap, {
  ak: 'WYbWDwS8NW7EuxFGqhdYlsF120PhYdSn'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
