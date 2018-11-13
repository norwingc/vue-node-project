import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Song from '@/components/Song'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{ path: '/', name: 'home', component: HelloWorld },
		{ path: '/register', name: 'register', component: Register },
		{ path: '/login', name: 'login', component: Login },
		{ path: '/song', name: 'song', component: Song }
	]
})
