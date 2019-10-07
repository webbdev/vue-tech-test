<template>
	<div>
		<h3 tabIndex="1">Repeat purchases</h3>
		<div class="info">
			<p><font-awesome-icon icon="box-open" /><span>Best entry categories</span> <span class="info-circle-icon"><font-awesome-icon icon="info-circle" /></span></p>
		</div>
		<div class="info-box2">
			<p>For high lifetime spend</p>
			<p>Dog toys</p>
		</div>
		<div class="info-box2">
			<p>For sales across categories</p>
			<p>Poop care</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'RepeatPurchases'
}
</script>

<style scoped>
	.info p span.info-circle-icon {
		font-size: 16px;
		padding: 0;
		margin: 0;
	}

	.info-box2 {
		border: 2px solid #8b9fab;
		border-radius: 7px;
		text-align: center;
		margin-bottom: 20px;
		padding: 10px;
		width: 90%;
	}

	.info-box2 p:first-child {
		font-weight: bold;
		margin-bottom: 3px;
	}

	.info-box2 p:last-child {
		font-weight: normal;
		font-size: 16px;
	}

	@media screen and (max-width: 900px) {

		.info-box2 {
			width: 95%;
		}
	}
	
	@media screen and (max-width: 840px) {
		.info-box2 {
			width: 90%;
		}
	}

	@media screen and (max-width: 610px) {
		.info-box2 {

			text-align: left;
		}
	}


</style>