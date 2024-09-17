<template>
	<div class="footer">
		<router-link to="/" class="footer__logo">
			<img src="@/assets/images/Logo.png" alt="" />
		</router-link>
		<div class="footer__links">
			<router-link class="footer__link" to="/delivery-policy">
				Політика доставки
			</router-link>
			<router-link class="footer__link" to="/privacy-policy">
				Політика конфеденційності
			</router-link>
			<router-link class="footer__link" to="/cash-turnover-policy">
				Політика повернення коштів
			</router-link>
		</div>
		<div class="footer__social-media">
			<a class="footer__link" href="https://www.instagram.com/">Instagram</a>
			<a class="footer__link" href="mailto:limarenko@gmail.com"
				>limarenko@gmail.com</a
			>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./footer.scss" />
