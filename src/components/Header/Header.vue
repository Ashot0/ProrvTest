<template>
	<div class="header">
		<div class="header__wrapper">
			<div class="header__left">
				<router-link class="header__link" to="/">Головна</router-link>
				<select class="header__select" name="shop" id="shop">
					<option value="shop">Магазин</option>
					<option value="shop">Магазин</option>
					<option value="shop">Магазин</option>
					<option value="shop">Магазин</option>
				</select>
				<select class="header__select" name="collections" id="collections">
					<option value="collections">Колекції</option>
					<option value="collections">Колекції</option>
					<option value="collections">Колекції</option>
					<option value="collections">Колекції</option>
				</select>
			</div>
			<button type="button" class="header__burger">
				<img src="@/assets/icons/Burger.png" alt="" srcset="" />
			</button>
			<img class="header__logo" src="@/assets/images/Logo.png" />
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
		return {};
	},
};
</script>

<style lang="scss" scoped src="./header.scss" />
