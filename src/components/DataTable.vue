<template>
	<div>
		<h4 v-if="title">{{ title }}</h4>

		<table class="table table-striped">
			<thead>
				<tr>
					<th v-for="key in legend">
						{{ key.label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="row in rows | orderBy sort" style="{{ getAlternateStyles(row) }}">
					<td v-for="key in legend" @click="performAction(row, key)" v-bind:class="{ 'action' : hasAction(row, key)}">
						{{ row[key.field] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		props: {
			rows: {
				type: Array,
				required: true
			},
			legend: {
				type: Array,
				required: true
			},
			sort: {
				type: String
			},
			title: {
				type: String
			}
		},

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
	td.action {
		cursor: pointer;
	}
</style>
