<template>
	<div class="form-group mb-3 input-group input-group-alternative">
		<div class="input-group-prepend">
			<span class="input-group-text">
				<i class="ni ni-map-big"></i>
			</span>
		</div>
		<select
			class="form-control"
			:value="value"
			@input="$emit('input', $event.target.value)"
		>
			<option disabled value="">Choisissez</option>
			<option
				v-for="city in cities"
				:key="city.id_city"
				:value="city.id_city"
				>{{ city.cityname }}</option
			>
		</select>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	inheritAttrs: false,
	name: 'select-city',
	props: {
		value: String
	},
	data: () => {
		return {
			cities: null
		};
	},
	mounted() {
		axios
			.get('http://localhost:8080/accounts/city/all')
			.then(cities => (this.cities = cities.data));
	},
	created() {
		this.val = this.value;
	}
};
</script>
<style></style>
