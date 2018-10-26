<template>
	<v-toolbar fixed class="cyan" dark>
		<v-toolbar-title class="mr-4 logo" @click="navigateTo({name: 'home'})">TabTracker</v-toolbar-title>
		<v-toolbar-items>
			<v-btn flat dark>Browse</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-btn flat dark @click="navigateTo({name: 'login'})" v-if="!$store.state.isUserLoggedIn">
				Login
			</v-btn>
			<v-btn flat dark @click="navigateTo({name: 'register'})" v-if="!$store.state.isUserLoggedIn">
				Sign Up
			</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
export default {
	methods: {
		navigateTo(route){
			this.$router.push(route)
		}
	}
}
</script>

<style scoped>
.logo{
	cursor: pointer
}
</style>

