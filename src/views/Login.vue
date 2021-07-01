<template>
	<section class="section section-shaped section-lg my-0">
		<div class="container pt-lg-md">
			<div class="row justify-content-center">
				<div class="col-lg-5">
					<card
						type="default"
						shadow
						header-classes="bg-white pb-5"
						body-classes="px-lg-5 py-lg-5"
						class="border-0"
					>
						<template>
							<h1 class="display-4 text-center text-secondary mb-4">
								Connect to your CesiEat account
							</h1>
							<form role="form">
								<base-input
									alternative
									class="mb-3"
									type="email"
									v-model="email"
									placeholder="Email"
									addon-left-icon="ni ni-email-83"
								>
								</base-input>
								<base-input
									alternative
									type="password"
									v-model="password"
									placeholder="Password"
									addon-left-icon="ni ni-lock-circle-open"
								>
								</base-input>

								<div class="text-center">
									<base-button
										@click="loginOnSubmit"
										type="primary"
										class="my-4"
										>Login</base-button
									>
								</div>
							</form>
						</template>
					</card>
					<div class="row mt-3">
						<div class="col text-center">
							<router-link class="link" to="/register">
								<small>Create new account</small>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import Vuecookie from 'vue-cookie';

Vue.use(Vuecookie);

export default {
	data: function() {
		return {
			email: null,
			password: null
		};
	},
	methods: {
		loginOnSubmit: function(e) {
			axios
				.post('http://localhost:8080/auth/login', {
					email: this.email,
					password: this.password
				})
				.then(response => {
					this.$cookie.set('token', response.data.token, {
						expires: new Date(Date.now() + 604800000),
						samesite: 'lax'
					});

					localStorage.firstname = response.data.user.firstname;
					localStorage.lastname = response.data.user.lastname;
					localStorage.email = response.data.user.email;
					localStorage.siret = response.data.user.siret || '';
					localStorage.numstreet = response.data.user.numstreet;
					localStorage.street = response.data.user.street;
					localStorage.points = response.data.user.points;
					localStorage.sponsor = response.data.user.sponsor;
					localStorage.sponsorised = response.data.user.sponsorised;
					localStorage.id_city = response.data.user.id_city || '';
					localStorage.id_img = response.data.user.id_img || '';
					localStorage.id_role = response.data.user.id_role || '';

					if (response.status === 200) {
						this.$router.push('/');
						location.reload();
					}
				});

			e.preventDefault();
		}
	}
};
</script>
<style>
.link {
	color: #adb5bd;
}
.link:hover {
	color: #adb5bd;
}
</style>
