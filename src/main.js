// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import '../public/libs/swiper-4.1.0.min.css'
import '../public/libs/swiper-4.1.0.min.js'
import store from './stores'

import axios from '../node_modules/axios'
Vue.prototype.axios = axios;

import Scroller from '@/components/Scroller' //全局组件：Scroller
Vue.component('Scroller', Scroller);

import Loading from '@/components/Loading' //全局组件：Scroller
Vue.component('Loading', Loading);

// 全局过滤器：将movieList接口中的img路径中的（w.h）替换
Vue.filter('setWH',(url,arg)=>{
	return url.replace((/w\.h/),arg); //这个.需要转义
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
