<template>
	<div class="card__border">
		<h5 class="text-default">{{ name }}</h5>
		<base-button tag="a" href="#" type="default" class="mt-4">
			Add to cart
		</base-button>
	</div>
</template>
<script>
export default {
	name: 'CardArticle',
	props: {
		price: {
			type: Number
		},
		name: {
			type: String
		}
	}
};
</script>
<style>
.card__border {
	border: 1px solid #adb5bd;
	padding: 1rem;
	transition: border ease 0.2s;
}
.card__border:hover {
	border: 1px solid #172b4d;
}
</style>
