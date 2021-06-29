<template>
	<div class="row">
		<div class="col-8">
			<router-link
				class="item__link"
				:to="{ name: 'restaurantmenu', params: { id: restaurant._id.$oid } }"
			>
				<div class="row">
					<div class="col-5">
						<div class="rest__img">
							<img :src="restaurant.restImage" :alt="restaurant.restName" />
						</div>
					</div>
					<div class="col-7">
						<div class="rest__info">
							<p class="rest__name">{{ restaurant.restName }}</p>
							<badge v-if="restaurant.restOpen" pill type="success">Open</badge>
							<badge v-if="!restaurant.restOpen" pill type="danger"
								>Close</badge
							>
						</div>
						<p class="rest__street">
							{{ restaurant.restContact.address.streetNumber }}
							{{ restaurant.restContact.address.streetName }}
						</p>
						<p class="rest__city">
							{{ restaurant.restContact.address.cityName }}
						</p>
					</div>
				</div>
			</router-link>
		</div>
		<div class="col-4">
			<p class="rest__contact">Contact</p>
			<div class="contact">
				<a href="mailto:">
					<i class="ni ni-send"></i>
					{{ restaurant.restContact.email }}
				</a>
			</div>
			<div class="contact">
				<a href="tel:+33673451623">
					<i class="ni ni-mobile-button"></i>
					{{ restaurant.restContact.phone }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "RestaurantsList",
	props: {
		restaurant: {
			type: Object,
			description: "All restaurants array"
		}
	}
};
</script>

<style>
.item__link,
.item__link:hover {
	color: #525f7f;
	font-weight: 500;
}
.item__link:hover .rest__name {
	text-decoration: underline;
}
.rest__img {
	/* max-height: 170px; */
	width: 100%;
	height: 170px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}
.rest__img > img {
	flex-shrink: 0;
	-webkit-flex-shrink: 0;
	max-width: 100%;
	max-height: 100%;
}
.rest__info {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
}
.rest__name {
	margin: 0 15px 0 0;
	font-weight: bold;
}
.rest__street,
.rest__city {
	margin: 0;
}
.rest__contact {
	font-weight: bold;
}
.contact a {
	line-height: 1.7;
}
</style>
