<template>
	<div class="radio__group">
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
import RadioArticles from '@/components/RadioArticles';
export default {
	name: 'RadioGroup',
	components: {
		RadioArticles
	},
	model: {
		event: 'change'
	},
	props: {
		items: {
			required: true,
			type: Object
		}
	},
	methods: {
		updateValue(value) {
			this.$emit('change', value);
		}
	}
};
</script>
<style></style>
