<template>
	<div class="more-similar">
		<h3 class="more-similar__title">Те що вам може сподобатись</h3>
		<div class="more-similar__wrapper">
			<div class="more-similar__block" v-for="block in $props.info.similar">
				<img class="more-similar__image" :src="`${block.img}`" alt="" />
				<p class="more-similar__des">
					<span class="more-similar__name">{{ block.name }}</span>
					<span class="more-similar__price">{{ block.price }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
	props: {
		info: {
			type: Object,
			required: true,
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./more-similar.scss" />
