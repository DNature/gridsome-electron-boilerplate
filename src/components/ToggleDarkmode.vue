<template>
	<button
		@click="handleClick"
		aria-label="Toggle Darkmode"
		title="Toggle Darkmode"
	>
		<slot :dark="isDarkMode" />
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export const LIGHTS_OUT = 'lights-out';

export default Vue.extend({
	data() {
		return {
			isDarkMode: false,
		};
	},
	methods: {
		handleClick(): boolean {
			const hasDarkMode = document.documentElement.hasAttribute(LIGHTS_OUT);

			return this.toggleDarkMode(!hasDarkMode);
		},

		toggleDarkMode(shouldBeDark: boolean): boolean {
			document.documentElement.toggleAttribute(LIGHTS_OUT, shouldBeDark);

			this.isDarkMode = shouldBeDark;
			this.writeToStorage(shouldBeDark);

			return shouldBeDark;
		},
		writeToStorage(prefersDark: boolean): void {
			localStorage.setItem(LIGHTS_OUT, prefersDark ? 'true' : 'false');
		},
		getFromStorage(): boolean {
			return localStorage.getItem(LIGHTS_OUT) === 'true' ? true : false;
		},
		hasInStorage(): boolean {
			const check = localStorage.getItem(LIGHTS_OUT);

			return check !== null;
		},
		detectPrefered(): boolean {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		},
	},
	mounted() {
		if (this.hasInStorage()) {
			this.toggleDarkMode(this.getFromStorage());
		} else if ((process as any).isCleint && window.matchMedia) {
			this.toggleDarkMode(this.detectPrefered());
		}
	},
});
</script>

<style scoped></style>
