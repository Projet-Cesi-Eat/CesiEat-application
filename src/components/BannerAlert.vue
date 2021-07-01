<template>
	<div class="alert__banner container">
		<base-alert :type="status" v-show="isActive" dismissible>
			<span class="alert-inner--icon" v-if="status === 'success'"
				><i class="ni ni-like-2"></i
			></span>
			<span class="alert-inner--icon" v-else
				><i class="ni ni-chat-round"></i
			></span>
			<span class="alert-inner--text">
				{{ message }}
			</span>
			<button type="button" class="close">
				<span aria-hidden="true">&times;</span>
			</button>
		</base-alert>
	</div>
</template>
<script>
export default {
	name: 'BannerAlert',
	props: {
		message: {
			type: String
		},
		isActive: {
			type: Boolean,
			description: 'Banner is active'
		},
		status: {
			type: String,
			description: 'Error status'
		}
	}
};
</script>
<style>
.alert__banner {
	z-index: 999;
	position: fixed;
	bottom: 0;
}
</style>
