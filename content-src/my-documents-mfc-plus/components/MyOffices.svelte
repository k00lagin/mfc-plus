<script>
	import { myOffices, removeOffice } from "../stores.js";
</script>

{#if $myOffices.length > 0}
	<table>
		<tr>
			<th>Адрес</th>
			<th>Псевдоним</th>
			<th />
		</tr>
		{#each $myOffices as office}
			<tr>
				<td>
					{office.address}
				</td>
				<td>
					<input type="text" class="input input-bordered input-xs" bind:value={office.short_name} />
				</td>
				<td>
					<button
						class="btn btn-xs btn-square"
						on:click={() => {
							removeOffice(office.id);
						}}>x</button
					>
				</td>
			</tr>
		{/each}
	</table>
{/if}
