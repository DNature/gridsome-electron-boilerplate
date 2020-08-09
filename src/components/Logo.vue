<template>
	<span>
		<g-image src="~/assets/favicon.png" :width="getWidth" alt="Logo" />
	</span>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		width: {
			type: Number,
			default: 42,
		},
	},

	computed: {
		getWidth(): number {
			return this.width;
		},

		getHeight(): number {
			return Math.ceil((this.getWidth / 48) * 48);
		},
	},
});
</script>
