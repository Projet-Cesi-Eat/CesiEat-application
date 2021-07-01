<template>
	<div>
		<!-- <h3 class="display-4">{{ article.type }}</h3> -->

		<!-- <base-radio
			v-for="(item, index) in article.items"
			:key="index"
			name="radio0"
			class="mb-3"
			v-model="radio.radio1"
		>
			{{ item.name }} - {{ item.price }} $
		</base-radio> -->
		<!-- <label :key="item.name" v-for="item in article.items">
			<input
				type="radio"
				name="radio-input"
				:value="item.name"
				:id="item.name"
				@change="$emit('input', item.name)"
			/>
			{{ item.name }} - {{ item.price }} $
		</label> -->
		<div v-for="(item, index) in items" v-bind:key="index">
			<base-radio
				:name="item.name"
				class="mb-3"
				:value="item.name"
				:id="item.name"
				@change="$emit('input', item.name)"
			>
				{{ item.name }} - {{ item.price.$numberDecimal }} $
			</base-radio>
		</div>
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
		items: {
			required: true,
			type: Object
		}
	},
	/* model: {
		event: 'change'
	}, */
	methods: {
		updateValue(value) {
			this.$emit('change', value);
		}
	}
};
</script>
<style></style>
