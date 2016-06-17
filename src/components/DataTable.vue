<template>
	<div>
		<h4 v-if="rawData.reportTitle">{{ rawData.reportTitle }}</h4>

		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="key in rawData.legend">
						{{ key.label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in rawData.rows | orderBy rawData.orderBy" style="{{ getAlternateStyles(row) }}">
					<td v-for="key in rawData.legend" @click="performAction(row, key)" v-bind:class="{ 'action' : hasAction(row, key)}">
						{{ row[key.field] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		props: ['rawData'],

		methods: {

			performAction: function(row, key) {
				if(this.getAction(row, key)) {
					window.location = this.getAction(row, key);
				}
			},

			getAction: function(row, key) {
				if(row[key.action]) {
					return row[key.action];
				} else if(row.__action__) {
					return row.__action__;
				}
			},

			hasAction: function(row, key) {
				return this.getAction(row, key);
			},

			getAlternateStyles: function(row) {
				return row.__styles__;
			}

		}
	}
</script>

<style>
	body {
		font-size: 12px;
	}
	.table>tbody>tr>td, .table>thead>tr>th {
		padding: 5px;
	}
	td.action {
		cursor: pointer;
	}
</style>
