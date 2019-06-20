export default {
	path : '/movie',
	component : () => import('@/views/Movie'),
	children : [ //二级路由
		{
			path : 'City',
			component : () => import('@/components/City')
 		},
 		{
			path : 'NowPlaying',
			component : () => import('@/components/NowPlaying')
 		},
 		{
			path : 'ComingSoon',
			component : () => import('@/components/ComingSoon')
 		},
 		{
			path : 'Search',
			component : () => import('@/components/Search')
 		},
 		{
 			path : 'detail/1/:movieId',
 			components : {
 				default : () => import('@/components/NowPlaying'),//解决两个router的问题
 				detail : () => import('@/views/Movie/detail')
 			},
 			props : {
 				detail : true
 			}
 			// propos : true //这种和上面有什么区别，没懂
 		},
 		{
 			path : 'detail/2/:movieId',
 			components : {
 				default : () => import('@/components/ComingSoon'),//解决两个router的问题
 				detail : () => import('@/views/Movie/detail')
 			},
 			props : {
 				detail : true
 			}
 			// propos : true //这种和上面有什么区别，没懂
 		},
 		{  //首页的重定向:如输入http://localhost:8080，也是http://localhost:8080/movie/NowPlaying
 			path : '/*',
 			redirect : '/movie/NowPlaying'
 		}
	]

	
}