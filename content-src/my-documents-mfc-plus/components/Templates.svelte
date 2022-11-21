<script>
	import { onMount } from "svelte";
	import TemplateButton from "./TemplateButton.svelte";
	import { myOffices } from "../stores.js";
	let month, year;
	month = new Date().getMonth() || 12;
	if (month == 12) {
		year = new Date().getFullYear() - 1;
	} else {
		year = new Date().getFullYear();
	}
	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];
	onMount(() => {});
</script>

<input type="text" class="input input-xs" bind:value={year} />
<select class="select select-xs" bind:value={month}>
	<option disabled>Месяц</option>
	{#each months as monthName, monthNumber}
		<option value={monthNumber + 1}>{monthName}</option>
	{/each}
</select>
{#if $myOffices.length > 0}
	<table class="">
		<tr>
			<th>Офис</th>
			<th>Шаблоны</th>
		</tr>
		{#each $myOffices as office}
			<tr>
				<td>{office.short_name || office.address}</td>
				<td>
					{#each office.type === "mfc" ? ["federal", "municipal", "regional", "otherServices", "windowsAndEmployee"] : ["federal", "otherServices", "windowsAndEmployee"] as template}
						<TemplateButton
							{year}
							{month}
							office={{ id: office.id, type: office.type }}
							type={template}
						/>
					{/each}
				</td>
			</tr>
		{/each}
	</table>
{/if}
