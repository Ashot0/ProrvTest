<template>
	<div class="aside">
		<div class="aside__breadcrumbs">
			<router-link class="aside__breadcrumb" to="/">Головна</router-link>
			<div class="aside__line"></div>
			<router-link class="aside__breadcrumb" to="/">Жилети</router-link>
			<div class="aside__line"></div>
			<router-link class="aside__breadcrumb aside__breadcrumb_active" to="/"
				>Vest</router-link
			>
		</div>

		<div class="aside__info">
			<h2 class="aside__title">{{ info.name }}</h2>
			<p class="aside__des">{{ info.info }}</p>
		</div>

		<div class="aside__price">{{ info.price }}</div>

		<div class="aside__size">
			<p class="aside__size-title">Розмір:</p>
			<div class="aside__size-btns">
				<button
					class="aside__size-btn"
					v-for="size in info.size"
					:key="size.name"
					type="button"
				>
					{{ size.name }}
				</button>
			</div>
		</div>

		<div class="aside__color">
			<p class="aside__color-title">Колір:</p>
			<div class="aside__color-btns">
				<button
					class="aside__color-btn"
					v-for="color in info.colors"
					:key="color.name"
					type="button"
				>
					{{ color.name }}
				</button>
			</div>
		</div>

		<button class="aside__add-to-cart" type="button">Додати у кошик</button>

		<div class="aside__sku">
			<span class="aside__sku_title">SKU:</span>{{ info.sku }}
		</div>

		<div class="aside__details">
			<button class="aside__detail-btn" @click="toggleList" type="button">
				Деталі
				<span class="aside__plus" v-if="!isOpen">
					<img src="@/assets/icons/Plus.png" alt="Show details" />
				</span>
				<span class="aside__minus" v-else>
					<img src="@/assets/icons/Minus.png" alt="Hide details" />
				</span>
			</button>
			<ul class="aside__detail-list" v-if="isOpen">
				<li class="aside__detail" v-for="detail in info.details" :key="detail">
					{{ detail }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'Aside',
	props: {
		info: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const isOpen = ref(false);
		const toggleList = () => {
			isOpen.value = !isOpen.value;
		};
		return { isOpen, toggleList };
	},
};
</script>

<style lang="scss" scoped src="./aside.scss" />
