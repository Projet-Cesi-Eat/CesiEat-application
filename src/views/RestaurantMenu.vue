<template>
	<div>
		<div class="banner__img">
			<img :src="actualRest.restImage" :alt="actualRest.restName" />
		</div>
		<div class="container mt-3">
			<h1 class="display-2">{{ actualRest.restName }}</h1>
			<div class="menu__container mt-4">
				<h2 class="display-3">Menu</h2>
				<div class="row mt-3 mb-2">
					<div class="card__item col-4" v-for="menu in menus" :key="menu.size">
						<CardMenu :price="menu.price" :size="menu.size" />
					</div>
				</div>
			</div>
			<div class="articles__container mt-4">
				<h2 class="display-3">Articles</h2>
				<div
					class="cards__articles"
					v-for="article in articles"
					:key="article.size"
				>
					<h3 class="type__name display-4">{{ article.type }}</h3>
					<div class="row">
						<div class="col-4" v-for="item in article.items" :key="item.name">
							<CardArticle :price="item.price" :name="item.name" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import restData from '../data/restaurants.json';
import CardMenu from '../components/CardMenu.vue';
import CardArticle from '../components/CardArticle.vue';

export default {
	components: {
		CardMenu,
		CardArticle
	},
	data() {
		return {
			actualRest: null,
			menus: null,
			articles: null
		};
	},
	mounted() {
		restData.forEach(rest => {
			if (rest._id.$oid === this.$route.params.id) {
				this.actualRest = rest;
				this.menus = rest.restMenu;
				this.articles = rest.restArticles;
			}
		});
	}
};
</script>
<style>
.banner__img {
	width: 100%;
	max-height: 250px;
	margin: auto;
	filter: blur(5px);
	overflow: hidden;
}
.banner__img > img {
	margin: auto;
	width: 50%;
	display: flex;
}
.type__name {
	text-transform: capitalize;
	margin-bottom: 1rem;
	margin-top: 1.5rem;
}
</style>
