<template>
	<div class="gallery">
		<img
			v-for="(image, index) in images"
			:key="index"
			:class="'gallery__image gallery__image_' + (index + 1)"
			:src="image"
			alt="image"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
	images: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>

<style lang="scss" scoped src="./gallery.scss" />
