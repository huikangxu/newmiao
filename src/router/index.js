import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode : 'history',
  base :　process.env.BASE_URL,
  routes: [
  	movieRouter,
  	cinemaRouter,
  	mineRouter,
  	{   //  这是重定向？当路径都不匹配时，默认进入movie
  		path : '/*',
  		redirect : '/movie'
  	}
  ]
})
