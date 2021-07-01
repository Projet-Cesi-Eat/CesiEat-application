<template>
	<div class="card__border">
		<h5 class="text-default text-uppercase">Menu {{ size }}</h5>
		<base-button
			tag="a"
			href="#"
			type="default"
			class="mt-4"
			@click="modalMenu = true"
		>
			Add to cart
		</base-button>
		<modal :show.sync="modalMenu">
			<template slot="header">
				<h5 class="modal-title" id="exampleModalLabel">
					Menu {{ size }} composition
				</h5>
			</template>
			<div class="articles__container mt-4">
				<div
					class="cards__articles"
					v-for="article in articles"
					:key="article.type"
				>
					<!-- <h3 class="type__name display-4">{{ article.type }}</h3>
					<div class="row">
						<div class="col-4" v-for="item in article.items" :key="item.name">
							<CardArticle :name="item.name" />
						</div>
					</div> -->
					<h3 class="display-4">{{ article.type }}</h3>
					<base-radio
						v-for="(item, index) in article.items"
						:key="index"
						:name="item.name"
						class="mb-3"
						v-model="item.name"
					>
						{{ item.name }} - {{ item.price.$numberDecimal }} $
					</base-radio>
				</div>
			</div>
			<template slot="footer">
				<base-button type="primary">Save changes</base-button>
			</template>
		</modal>
	</div>
</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
	name: 'CardMenu',
	components: {
		Modal
	},
	data() {
		return {
			modalMenu: false,
			radio: {
				radio1: 'radio0'
			}
		};
	},
	props: {
		price: {
			type: Number
		},
		size: {
			type: String
		},
		articles: {
			type: Array
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
