<template>
	<div>
		<h3 tabIndex="1">Basket analysis</h3>
		<div class="info">
			<p><font-awesome-icon icon="cart-plus" /><span>Top bought together ASINs</span></p>
		</div>
		<div class="info-box">
			<div class="image"><img alt="pic1" src="../assets/pic1.png"></div>
			<div class="info-plus"><span>+</span></div>
			<div class="image"><img alt="pic2" src="../assets/pic2.png"></div>
		</div>
		<p class="info-box-text">Bought together: <strong>204 times</strong></p>
	</div>
</template>

<script>
export default {
  name: 'BasketAnalysis',
  props: []
}
</script>
	
<style scoped>
	.info-box {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
	}

	.image img {
		border: 2px solid #bdc2d0;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		min-width: 110px;
		min-height: 110px;
	}

	.info-box .info-plus {
		padding-left: 20px;
		padding-right: 20px;
	}

	.info-box .info-plus span {
		font-size: 16px;
		font-weight: bold;
	}

	.info-box-text {
		font-size: 12px;
	}

	@media screen and (max-width: 900px) {
		.info-box .info-plus {
			padding-left: 15px;
			padding-right: 15px;
		}
	}

	@media screen and (max-width: 610px) {
		.info-box-text {
			margin-bottom: 10px;
		}
	}
</style>