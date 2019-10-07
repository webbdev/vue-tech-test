<template>
	<div class="wrapper">
		<h3 tabIndex="1">Sales breakdown</h3>
		<div class="container">
			<div class="left-side">
				<div class="chart">
					<p>Total sales - Ad v organic</p>
					<DoughnutChart 
						:data="chartData" 
						:options="options"
					></DoughnutChart>
				</div>
			</div>
			<div class="right-side">
				<div class="prod-table">
					<table>
						<thead>
							<tr>
								<th scope="col" class="clmn1">Top categories</th>
								<th scope="col" class="clmn2">Sales</th>
								<th scope="col" class="clmn3"><span>Compared to previous period</span></th>
								<th scope="col" class="clmn4">Ad spend</th>
								<th scope="col" class="clmn5"><span>Compared to previous period</span></th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="product of products" v-bind:key="product.id">
								<td data-label="Top categories" class="clmn1">{{product.id}}. {{product.category}}</td>
								<td data-label="Sales" class="clmn2">${{product.sales}}</td>
								<td
									data-label="Compared to previous period" class="clmn3"
								>
									<span v-if="product.salesarrowup" class="up-green">
										{{product.salescompared}}% 
										<span class="arrow-icon up">
											<font-awesome-icon icon="arrow-up" />
										</span>
									</span>
									<span v-else class="down-red">
										{{product.salescompared}}%
										<span class="arrow-icon down">
											<font-awesome-icon icon="arrow-down" />
										</span>
									</span>
								</td>
								<td data-label="Ad spend" class="clmn4">${{product.adspend}}</td>
								<td 
									data-label="Compared to previous period" class="clmn5"
								>
									<span v-if="product.adarrowup" class="up-green">
										{{product.adcompared}}% 
										<span class="arrow-icon up">
											<font-awesome-icon icon="arrow-up" />
										</span>
									</span>
									<span v-else class="down-red">
										{{product.adcompared}}% 
										<span class="arrow-icon down">
											<font-awesome-icon icon="arrow-down" />
										</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DoughnutChart from "./DoughnutChart";
import 'chartjs-plugin-labels';

export default {
	name: 'SalesBreakdown',
	props: ["products"],
	components: { DoughnutChart },
	data() {
		return {
			chartData: {
				labels: ["Organic", "Ad Sales"],
				datasets: [
					{
						backgroundColor: ["#00e3b5", "#303fc6"],
						data: [70, 30]
					}
				]
			},
			options: {
				responsive: true,
				legend: {
					position: 'bottom'
				},
				plugins: {
					labels: {
						render: 'percentage',
						fontColor: ['#fff', '#fff'],
						precision: 2
					}
				}
			}
		}
	}
}
</script>

<style scoped>
	.wrapper {
		padding: 10px 15px 0;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	.left-side,
	.right-side {
		padding: 30px 15px;
	}

	.left-side {
		width: 30%;
		text-align: center;
	}

	.left-side p {
		font-weight: bold;
		margin-bottom: 10px;
	}

	.right-side {
		width: 70%;
	}

	.chart {
		max-width: 250px;
		margin: 0 auto;
	}

	.chart p {
		margin-bottom: 15px;
	}

	.prod-table {
		border: 2px solid #8b9fab;
		border-radius: 7px;
		width: 90%;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.prod-table table {
		width: 100%;
		border-collapse: collapse;
		line-height: 1.3;
	}

	table thead tr th.clmn1,
	table tbody tr td.clmn1 {
		width: 33.3333%;	
	}

	table thead tr th.clmn2,
	table tbody tr td.clmn2,
	table thead tr th.clmn3,
	table tbody tr td.clmn3,
	table thead tr th.clmn4,
	table tbody tr td.clmn4,
	table thead tr th.clmn5,
	table tbody tr td.clmn5 {
		width: 16%;
	}

	table thead tr th.clmn1,
	table tbody tr td.clmn1,
	table thead tr th.clmn3,
	table tbody tr td.clmn3 {
		border-right: 1px dashed #8b9fab;	
	}

	td, th { 
		padding: 8px 15px;
		text-align: left;
	}

	table thead {
		font-size: 13px;
		line-height: 1.2;
	}

	.prod-table table thead th {
		padding-top: 3px;
	}

	thead tr th span {
		font-size: 11px;
		font-weight: normal;
	}

	table tbody {
		font-size: 15px;
	}

	table tbody tr td.clmn3,
	table tbody tr td.clmn5 {
		font-weight: bold;
	}

	.arrow-icon {
		float: right;
		margin: 0 10px 0 5px;
		font-size: 15px;
	}

	.up-green,
	.arrow-icon.up {
		color: #00e3b5;
	}

	.down-red,
	.arrow-icon.down {
		color: #ec4339;
	}

	@media screen and (max-width: 1200px) {
		.prod-table {
			width: 100%;
		}
	}

	@media screen and (max-width: 1100px) {

		.arrow-icon {
			float: right;
			margin: 0 5px;
		}
	}

	@media screen and (max-width: 990px) {

		.arrow-icon {
			float: right;
			margin: 0 0 0 5px;
		}
	}

	@media screen and (max-width: 840px) {
		.left-side {
			width: 40%;
		}

		.left-side,
		.right-side {
			width: 100%;
		}

		.arrow-icon {
			margin: 0 10px 0 5px;
		}
	}

	@media screen and (max-width: 700px) {

		.arrow-icon {
			float: right;
			margin: 0 0 0 5px;
		}
	}

	@media screen and (max-width: 610px) {
		.left-side,
		.right-side {
			width: 100%;
			padding: 20px 15px 20px;
		}

		.prod-table {
			border: none;
		}

		table {
			border: 0;
		}

		table thead {
			border: none;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}

		table thead tr th.clmn1,
		table tbody tr td.clmn1,
		table thead tr th.clmn2,
		table tbody tr td.clmn2,
		table thead tr th.clmn3,
		table tbody tr td.clmn3,
		table thead tr th.clmn4,
		table tbody tr td.clmn4,
		table thead tr th.clmn5,
		table tbody tr td.clmn5 {
			width: 100%;
		}

		table thead tr th.clmn1,
		table tbody tr td.clmn1,
		table thead tr th.clmn3,
		table tbody tr td.clmn3 {
			border-right: none;	
		}

		table tr {
			border-radius: 7px;
			border: 1px solid #8b9fab;
			border-bottom: 3px solid #8b9fab;
			display: block;
			margin-bottom: 20px;
		}

		td, th { 
			padding: 8px 13px;
		}

		table td {
			border-bottom: 1px solid #8b9fab;
			display: block;
			font-size: 13px;
			text-align: right;
		}

		table td.clmn2,
		table td.clmn4 {
			border-bottom: 1px dotted #8b9fab;
		}

		table td::before {
			content: attr(data-label);
			float: left;
			font-weight: bold;
		}

		table td.clmn3::before,
		table td.clmn5::before {
			font-weight: normal;
			font-size: 12px;
		}

		table td:last-child {
			border-bottom: 0;
		}
	}
</style>