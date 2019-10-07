<template>
	<div>
		<h3 tabIndex="1">Demographics</h3>
		<div class="info">
			<p><font-awesome-icon icon="user-friends" /><span>Your customers are mostly:</span></p>
		</div>
		<div class="smboxes">
			<div class="smbox">
				<div class="smbox-text"><span class="fontaw-icon"><font-awesome-icon icon="mars" /></span><span>Male</span><span class="percentage">[68%]</span></div>
			</div>
			<div class="smbox">
				<div class="smbox-text"><span class="fontaw-icon"><font-awesome-icon icon="birthday-cake" /></span><span>Aged 45-54</span><span class="percentage">[28%]</span></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Demographics'
}
</script>
	
<style scoped>
	.smboxes {
		margin: 20px auto 0;
		text-align: center;
	}

	.smbox {
		background-color: #7ff1da;
		border-radius: 7px;
		text-align: left;
		margin-bottom: 20px;
		padding: 10px;
		width: 210px;
	}

	.smbox-text {
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
	}

	.smbox-text .fontaw-icon {
		font-size: 22px;
		margin-right: 13px;
	}

	.smbox-text .percentage {
		margin-left: 5px;
		font-weight: normal;
	}

	@media screen and (max-width: 840px) {
		.smbox:last-child {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: 610px) {
		.smboxes {
			margin: 0 auto;
		}
	}
</style>