<template>
	<div>
		<div class="container ct-example-row">
			<img
				class="banner__home"
				:src="require('../assets/img/home-banner.jpg')"
				alt="CesiEat Banner"
			/>
			<p v-if="user">{{ user }}</p>
			<p v-else>Not logged</p>
		</div>
	</div>
</template>

<script>
import BaseNav from '@/components/BaseNav';
import Vue from 'vue';
import Vuecookie from 'vue-cookie';

Vue.use(Vuecookie);

export default {
	components: {
		BaseNav
	},
	data: () => {
		return {
			user: null
		};
	},
	mounted() {
		if (this.$cookie.get('token')) {
			this.user = localStorage.firstname;
		}
	}
};
</script>

<style>
/* .banner {
	max-height: 50vh;
} */
.banner__home {
	max-height: 65vh;
	width: 100%;
}
</style>
