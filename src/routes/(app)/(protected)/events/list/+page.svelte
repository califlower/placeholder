<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>Name</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			{#each data.events as event}
				<tr>
					<td>
						{event.name}
					</td>
					<td>
						{event.date}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
