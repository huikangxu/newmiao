// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'

import axios from '../node_modules/axios'
Vue.prototype.axios = axios;

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
  components: { App },
  template: '<App/>'
})
