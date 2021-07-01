<template>
	<div class="card__border">
		<h5 class="text-default text-uppercase">Menu {{ menu.size }}</h5>
		<router-link
			:to="{
				name: 'choosemenu',
				params: { id: restaurant._id, menu: menu.size }
			}"
		>
			<base-button class="mt-4" type="default">Add to cart</base-button>
		</router-link>
		<modal :show.sync="modalMenu">
			<template slot="header">
				<h5 class="modal-title" id="exampleModalLabel">Menu {{ menu.size }}</h5>
			</template>
			<div class="articles__container mt-4">
				<div
					class="cards__articles"
					v-for="article in articles"
					:key="article.type"
				>
					<h3 class="display-4 text-capitalize">{{ article.type }}</h3>
					<RadioGroup :items="article.items" />
				</div>
			</div>
			<template slot="footer">
				<base-button type="default">Add to cart</base-button>
			</template>
		</modal>
	</div>
</template>
<script>
import RadioGroup from '@/components/RadioGroup.vue';
import Modal from '@/components/Modal.vue';

export default {
	name: 'CardMenu',
	components: {
		Modal,
		RadioGroup
	},
	data() {
		return {
			modalMenu: false,
			radio: {
				radio1: 'radio0'
			}
		};
	},
	model: {
		event: 'change'
	},
	props: {
		menu: {
			type: Object
		},
		articles: {
			type: Array
		},
		restaurant: {
			type: Object
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
