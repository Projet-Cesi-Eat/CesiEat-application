<template>
	<section class="section section-shaped section-sm my-0">
		<div class="container pt-3">
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
								Create your CesiEat account
							</h1>
							<form role="form">
								<base-input
									alternative
									class="mb-3"
									placeholder="Firstname"
									addon-left-icon="ni ni-hat-3"
									v-model="firstname"
									:valid="firstnameIsValid"
								>
								</base-input>
								<base-input
									alternative
									class="mb-3"
									placeholder="Lastname"
									addon-left-icon="ni ni-hat-3"
									v-model="lastname"
									:valid="lastnameIsValid"
								>
								</base-input>
								<base-input
									alternative
									class="mb-3"
									placeholder="Street number"
									addon-left-icon="ni ni-map-big"
									v-model="streetnumber"
									:valid="streetnumberIsValid"
								>
								</base-input>
								<base-input
									alternative
									class="mb-3"
									placeholder="Street"
									addon-left-icon="ni ni-map-big"
									v-model="street"
									:valid="streetIsValid"
								>
								</base-input>
								<select-city v-model="id_city"></select-city>
								<base-input
									alternative
									class="mb-3"
									placeholder="Email"
									addon-left-icon="ni ni-email-83"
									v-model="email"
									:valid="emailIsValid"
								>
								</base-input>
								<base-input
									alternative
									type="password"
									placeholder="Password"
									addon-left-icon="ni ni-lock-circle-open"
									v-model="password"
									:valid="passwordIsValid"
								>
								</base-input>
								<base-input
									alternative
									type="password"
									placeholder="Confirm password"
									addon-left-icon="ni ni-lock-circle-open"
									v-model="passwordConf"
									:valid="passwordConfIsValid"
								>
								</base-input>
								<div class="text-center">
									<base-button
										@click="registerOnSubmit"
										type="primary"
										class="my-4"
										>Create account</base-button
									>
								</div>
							</form>
						</template>
					</card>
				</div>
			</div>
			<BannerAlert
				message="Your account CesiEat has been successfully created !"
				:isActive="successActive"
				status="success"
			/>
			<BannerAlert
				message="You need to fill all the fields"
				:isActive="errorActive"
				status="danger"
			/>
		</div>
	</section>
</template>
<script>
import axios from 'axios';
import BannerAlert from '../components/BannerAlert.vue';

export default {
	components: {
		BannerAlert
	},
	data() {
		return {
			firstname: null,
			firstnameIsValid: null,
			lastname: null,
			lastnameIsValid: null,
			streetnumber: null,
			streetnumberIsValid: null,
			street: null,
			streetIsValid: null,
			id_city: null,
			cityIsValid: null,
			email: null,
			emailIsValid: null,
			password: null,
			passwordIsValid: null,
			passwordConf: null,
			passwordConfIsValid: null,
			successActive: false,
			errorActive: false
		};
	},
	methods: {
		registerOnSubmit() {
			axios
				.post('http://localhost:8080/auth/register', {
					firstname: this.firstname,
					lastname: this.lastname,
					email: this.email,
					password: this.password,
					numstreet: this.streetnumber,
					street: this.street,
					id_city: this.id_city
				})
				.then(() => {
					this.successActive = true;
					this.firstname = '';
					this.lastname = '';
					this.email = '';
					this.password = '';
					this.passwordConf = '';
					this.streetnumber = '';
					this.street = '';
					this.id_city = '';
					setTimeout(() => (this.successActive = false), 5000);
				})
				.catch(() => {
					this.errorActive = true;
					setTimeout(() => (this.errorActive = false), 5000);
				});
		}
	}
};
</script>
<style></style>
