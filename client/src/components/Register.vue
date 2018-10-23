<template>
	<div>
		<h1>Register</h1>
		<input type="email" name="emial" placeholder="email" v-model="email"> <br>
		<input type="password" name="password" placeholder="password" v-model="password"> <br>
		<button @click="register">Register</button>
	</div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
	data(){
		return{
			email: '',
			password: ''
		}
	},
	methods:{
		async register(){
			const resp = await AuthenticationService.register({
				email: this.email,
				password: this.password
			})

			console.log(resp.data)
		}
	}
}
</script>

<style scoped>

</style>



