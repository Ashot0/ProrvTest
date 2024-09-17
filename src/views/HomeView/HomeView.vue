<template>
	<div class="home">
		<Header class="home__header" />
		<div class="home__wrapper">
			<Gallery :images="info.images" class="home__gallery home__gallery_pc" />
			<GalleryMobile
				:images="info.images"
				class="home__gallery home__gallery_mobile"
			/>
			<Aside class="home__aside" :info="info" />
		</div>
		<MoreSimilar class="home__more-similar" :info="info" />
		<Footer class="home__footer" />
	</div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Gallery from '@/components/HomeView/Gallery/Gallery.vue';
import GalleryMobile from '@/components/HomeView/GalleryMobile/GalleryMobile.vue';
import Aside from '@/components/HomeView/Aside/Aside.vue';
import MoreSimilar from '@/components/HomeView/MoreSimilar/MoreSimilar.vue';
import Footer from '@/components/Footer/Footer.vue';

import image1 from '@/assets/images/Image1.png';
import image2 from '@/assets/images/Image2.png';
import image3 from '@/assets/images/Image3.png';
import image4 from '@/assets/images/Image4.png';
export default {
	name: 'HomeView',
	components: { Header, Aside, Gallery, MoreSimilar, Footer, GalleryMobile },
	setup(props) {
		const info = {
			name: 'Vest',
			info: 'Перероблений декорований жилет. Класичний крій. Асиметричний декор - бісерна бахрома. Декоритивний рукав-крило з вінтажної тюлі.',
			price: '₴1 000',
			sku: 'V0423001',
			images: [image1, image1, image1, image1],
			colors: [
				{ name: 'Чорний' },
				{ name: 'Білий' },
				{ name: 'Сірий' },
				{ name: 'Сірий' },
			],
			size: [
				{ name: 'XS' },
				{ name: 'S' },
				{ name: 'M' },
				{ name: 'L' },
				{ name: 'XL' },
			],
			details: [
				'65% Бавовна, 35% віскоза',
				'Кожна сорочка унікальна',
				'зроблено в Україні',
			],
			similar: [
				{
					img: image2,
					name: 'Рукавички короткі',
					price: '₴1 000',
				},
				{
					img: image3,
					name: 'Рукавички довгі',
					price: '₴1 000',
				},
				{
					img: image4,
					name: 'Кроп-жилет',
					price: '₴1 000',
				},
			],
		};

		return { info };
	},
};
</script>

<style lang="scss" scoped src="./home-view.scss" />
