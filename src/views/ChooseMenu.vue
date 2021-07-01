<template>
	<div class="container mt-3">
		<h1>Compose your {{ menu }} menu</h1>
		<div
			class="cards__articles"
			v-for="article in articles"
			:key="article.type"
		>
			<h2 class="mt-4 text-capitalize">{{ article.type }}</h2>

			<div v-for="(item, index) in article.items" v-bind:key="index">
				<base-radio
					class="mb-3"
					:name="article.type"
					:value="item.name"
					:id="item.name"
					@change="updateValue(item.name)"
				>
					{{ item.name }} - {{ item.price.$numberDecimal }} $
				</base-radio>
				<!-- <input
					:id="index"
					:name="article.type"
					type="radio"
					:value="item.name"
					:checked="item.name === value"
					:class="inputClass"
					:disabled="disabled"
					:required="required"
					@change="updateValue(item.name)"
				/> -->
			</div>
		</div>
		<base-button type="default" @click="addToCart">Add to cart</base-button>
	</div>
</template>
<script>
import axios from 'axios';
import BaseButton from '../components/BaseButton.vue';

export default {
	components: { BaseButton },
	data() {
		return {
			menu: this.$route.params.menu,
			articles: null,
			errorGet: null,
			sauces: null,
			dishes: null,
			accompaniments: null,
			drinks: null
		};
	},
	mounted() {
		axios
			.get('http://localhost:8080/restaurants/one/?id=' + this.$route.params.id)
			.then(
				restaurant => (this.articles = restaurant.data.restaurant.restArticles)
			)
			.catch(error => (this.errorGet = error));
	},
	methods: {
		updateValue(value) {
			this.$emit('change', value);
		},
		addToCart() {
			console.log(this.sauces);
			console.log(this.dishes);
			console.log(this.accompaniments);
			console.log(this.dishes);
		}
	}
};
</script>
<style></style>
