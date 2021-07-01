<template>
	<div>
		<h3 class="display-4">{{ article.type }}</h3>
		<base-radio
			v-for="(item, index) in article.items"
			:key="index"
			name="radio0"
			class="mb-3"
			v-model="radio.radio1"
		>
			{{ item.name }} - {{ item.price }} $
		</base-radio>
	</div>
</template>
<script>
import BaseRadio from './BaseRadio.vue';
export default {
	name: 'RadioArticles',
	components: {
		BaseRadio
	},
	props: {
		article: {
			type: Object
		}
	}
};
</script>
<style></style>
