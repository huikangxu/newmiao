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
 		// {  //首页的重定向:如输入http://localhost:8080，也是http://localhost:8080/movie/NowPlaying
 		// 	path : '/*',
 		// 	redirect : '/movie/NowPlaying'
 		// }
	]

	
}