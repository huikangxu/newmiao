<template>
	<div class="main">
		<Header title='我的喵喵'/>
		<div id="content">
			<Login />
		</div>
		<TabBar />
	</div>
</template>

<style>

</style>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import Login from '@/components/Login';

	export default {
		name : 'Mine',
		components: {
			Header,
			TabBar,
			Login
		}
	}
</script>