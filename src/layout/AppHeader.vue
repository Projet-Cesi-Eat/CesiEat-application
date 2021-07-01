<template>
	<header class="header-global">
		<base-nav
			class="navbar-main"
			transparent
			type="default"
			effect="dark"
			expand
		>
			<div class="col-6 collapse-brand">
				<router-link
					slot="brand"
					class="header__link header__link-primary mr-lg-5"
					to="/"
				>
					<span>Cesi Eat</span>
				</router-link>
				<router-link slot="brand" class="header__link mr-lg-5" to="/components">
					<span>Components</span>
				</router-link>
				<router-link
					slot="brand"
					class="header__link mr-lg-5"
					to="/restaurants"
				>
					<span>Restaurants</span>
				</router-link>
			</div>
			<div v-if="token === null" class="col-6 collapse-brand header__right">
				<router-link slot="brand" class="navbar-brand mr-lg-2" to="/login">
					<base-button type="neutral">Login</base-button>
				</router-link>
				<router-link slot="brand" class="navbar-brand" to="/register">
					<base-button type="primary">Register</base-button>
				</router-link>
				<p>{{ token }}</p>
			</div>
			<div v-else class="col-6 collapse-brand header__right">
				<router-link slot="brand" class="header__link mr-lg-5" to="/components">
					<span>{{ firstname }} {{ lastname }}</span>
				</router-link>
				<a class="navbar-brand" @click="logout">
					<base-button type="neutral">Logout</base-button>
				</a>
			</div>
		</base-nav>
	</header>
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
	data() {
		return {
			token: this.$cookie.get('token') || null,
			firstname: localStorage.getItem('firstname') || null,
			lastname: localStorage.getItem('lastname') || null
		};
	},
	methods: {
		logout() {
			this.$cookie.delete('token');

			localStorage.removeItem('firstname');
			localStorage.removeItem('lastname');
			localStorage.removeItem('email');
			localStorage.removeItem('siret');
			localStorage.removeItem('numstreet');
			localStorage.removeItem('street');
			localStorage.removeItem('points');
			localStorage.removeItem('sponsor');
			localStorage.removeItem('sponsorised');
			localStorage.removeItem('id_city');
			localStorage.removeItem('id_img');
			localStorage.removeItem('id_role');

			if (this.$router.currentRoute.path != '/login') {
				this.$router.push('/login');
			}

			location.reload();
		}
	}
};
</script>
<style>
header {
	height: 77px;
}
.header__link {
	text-transform: none;
	color: #f6f9fc;
}
.header__link:hover {
	color: #f6f9fc;
}
.header__link-primary {
	font-weight: bold;
	font-size: 1.5em;
}
.header__right {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
