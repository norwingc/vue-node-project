<template>
	<v-layout>
		<v-flex xs6 offset-xs3>
			<div class="elevation-2">
				<v-toolbar flat dense class="cyan" dark>
					<v-toolbar-title>Login</v-toolbar-title>
				</v-toolbar>

				<div class="pl-4 pr-4 pt-2 pb-2">
					<v-form autocomplete="off" v-model="valid">
						<v-text-field label="Email" v-model="email" type="email" :rules="[rules.required, rules.email]" required/>
						<v-text-field label="Password" v-model="password" :type="show1 ? 'text' : 'password'" :rules="[rules.required]"  :append-icon="show1 ? 'visibility_off' : 'visibility'" @click:append="show1 = !show1" required/>
						<div class="error--text" v-html="error" /> <br>
						<v-btn class="cyan" dark @click="login">Login</v-btn>
					</v-form>
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
	data(){
		return{
			valid: false,
			email: '',
			password: '',
			rules: {
				required: value => !!value || 'Required.',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
          		}
        	},
			error: null,
			show1: false
		}
	},
	methods:{
		async login(){
			try {
				const response =await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
				this.$store.dispatch('setToken', response.data.token)
				this.$store.dispatch('setUser', response.data.user)
			} catch (error) {
				this.error = error.response.data.error
			}
		}
	}
}
</script>

<style scoped>

</style>



