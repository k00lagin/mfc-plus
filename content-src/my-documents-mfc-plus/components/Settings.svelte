<script>
	import { onMount } from "svelte";
	import { user, offices, myOffices } from "../stores.js";
	import { fetchOffices } from "../api.js";
	import SelectOffices from "./SelectOffices.svelte"
	import MyOffices from "./MyOffices.svelte"
	

	onMount(() => {
		fetchOffices();
	});
</script>

<div
	class="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box"
>
	<input type="checkbox" class="peer" />
	<div class="text-xl font-medium collapse-title">Добавить отделы</div>
	<div class="collapse-content">
		{#if $offices }
			<SelectOffices></SelectOffices>
		{/if}
	</div>
</div>

<div
	class="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box"
>
	<input type="checkbox" class="peer" />
	<div class="text-xl font-medium collapse-title">Мои отделы</div>
	<div class="collapse-content">
		<MyOffices></MyOffices>
	</div>
</div>
