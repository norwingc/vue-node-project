<template>
	<v-layout>
		<v-flex>
			<panel title="Songs">
				<div v-for="song in songs" :key="song.title">

				</div>
			</panel>
		</v-flex>
	</v-layout>
</template>

<script>

import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
	components: {
		Panel
	},
	data(){
		return{
			songs: null
		}
	},
	mounted(){
		this.songs = SongsService.index()
	}
}
</script>

<style scoped>

</style>

