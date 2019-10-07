<template>
	<div class="container">
		<div class="column">
			<BasketAnalysis />
		</div>
		<div class="column">
			<RepeatPurchases />
		</div>
		<div class="column">
			<Demographics />
		</div>
	</div>
</template>

<script>
import BasketAnalysis from './BasketAnalysis.vue';
import RepeatPurchases from './RepeatPurchases.vue';
import Demographics from './Demographics.vue';

export default {
  name: 'Section2',
  props: [],
  components: {
    BasketAnalysis,
    RepeatPurchases,
    Demographics
  },
}
</script>
	
<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;	
	}

	.column {
		width: 33.3333%;
		padding: 0 15px;
	}
	
	@media screen and (max-width: 840px) {
		.column {
			width: 50%;
			margin-bottom: 20px;
		}
	}

	@media screen and (max-width: 610px) {
		.column {
			width: 100%;
			
		}
	}
</style>