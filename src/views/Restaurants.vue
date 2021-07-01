<template>
	<div class="container mt-5">
		<h1>Restaurants</h1>
		<div class="restaurant__container">
			<ul class="list__restaurants">
				<li
					v-for="restaurant in restaurants"
					:key="restaurant._id.$oid"
					class="item__restaurant"
				>
					<RestaurantsList :restaurant="restaurant" />
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import RestaurantsList from '../components/RestaurantsList.vue';
import axios from 'axios';

export default {
	components: {
		RestaurantsList
	},
	data() {
		return {
			restaurants: [],
			errorGet: null
		};
	},
	mounted() {
		axios
			.get('http://localhost:8080/restaurants/all/')
			.then(restaurants => (this.restaurants = restaurants.data.restaurants))
			.catch(error => (this.errorGet = error));
	}
};
</script>
<style>
.restaurant__container {
	margin-top: 1.5rem;
}
.list__restaurants {
	padding: 0;
}
li {
	list-style: none;
	margin: 1rem 0;
	padding-bottom: 1rem;
	position: relative;
}
li:nth-last-child(n + 2)::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 1px;
	background-color: #212529;
	opacity: 0.1;
}
</style>
