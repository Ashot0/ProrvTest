<template>
	<swiper class="gallery-mobile">
		<swiper-slide class="gallery-mobile__slide" v-for="image in images">
			<img class="gallery-mobile__image" :src="image" alt="" />
		</swiper-slide>
	</swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
	props: {
		images: Array,
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./gallery-mobile.scss" />
