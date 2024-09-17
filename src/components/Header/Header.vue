<template>
	<div class="header">
		<div class="header__wrapper">
			<div class="header__left">
				<router-link class="header__link" to="/">Головна</router-link>
				<select class="header__select" name="shop" id="shop">
					<option
						v-for="shopOption in shopOptions"
						:key="shopOption.value"
						:value="shopOption.value"
					>
						{{ shopOption.text }}
					</option>
				</select>
				<select class="header__select" name="collections" id="collections">
					<option
						v-for="collectionOption in collectionOptions"
						:key="collectionOption.value"
						:value="collectionOption.value"
					>
						{{ collectionOption.text }}
					</option>
				</select>
			</div>
			<button type="button" class="header__burger">
				<img src="@/assets/icons/Burger.png" alt="Menu" />
			</button>
			<router-link class="header__logo" to="/"
				><img src="@/assets/images/Logo.png" alt="Company Logo"
			/></router-link>

			<div class="header__right">
				<button class="header__currency" type="button">UA/UAH</button>
				<router-link class="header__cart" to="/cart">Кошик [ ]</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	setup() {
		const shopOptions = [
			{ value: 'shop', text: 'Магазин' },
			{ value: 'shop', text: 'Магазин' },
			{ value: 'shop', text: 'Магазин' },
			{ value: 'shop', text: 'Магазин' },
		];

		const collectionOptions = [
			{ value: 'collections', text: 'Колекції' },
			{ value: 'collections', text: 'Колекції' },
			{ value: 'collections', text: 'Колекції' },
			{ value: 'collections', text: 'Колекції' },
		];

		return {
			shopOptions,
			collectionOptions,
		};
	},
};
</script>

<style lang="scss" scoped src="./header.scss" />
