<script>
	import { offices, myOffices, addOffice } from "../stores.js";

	let query = '';
	$: filteredOffices = $offices.filter(office => office.address.toLowerCase().includes(query.toLowerCase()) && !$myOffices.some(myOffice => office.id === myOffice.id));
</script>

<input type="text" class="w-full max-w-xs mt-1 input-sm input input-bordered" placeholder="Поиск..." bind:value={query}>
{#each filteredOffices as office}
<p class="">
	<button class="btn btn-xs btn-square" on:click={() => {
		addOffice(office);
	}}>+</button>
	{office.address}
</p>
{/each}