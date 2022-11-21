<script>
	import { onMount } from "svelte";
	import { fetchData } from "../api.js";
	import { user } from "../stores.js";

	export let year, month, type, office;

	let templates = {
		federal: {
			title: "Федеральные услуги",
			letter: 'Ф'
		},
		regional: {
			title: "Региональные услуги",
			letter: 'Р'
		},
		municipal: {
			title: "Муниципальные услуги",
			letter: 'М'
		},
		otherServices: {
			title: "Услуги иных организаций",
			letter: 'И'
		},
		windowsAndEmployee: {
			title: "Окна и сотрудники",
			letter: 'О'
		}
	};

	let uploads;
	$: errors = uploads?.items[0]?.uploadFile?.countErrors;
	$: console.log('errors ', errors)

	async function fetchUploads() {
		uploads = await fetchData(`https://моидокументы.рф/mfc/ws/quarterDataExcel/getTemplatesList?rf_subject=${$user.rfSubjectRoleIds[0]}&year=${year}&month=${month}&formType=${type}&importType=mou&mouType=${office.type}&mouId=${office.id}`);
		console.log('uploads ', uploads)
	}

	$: fetchUploads(year, month, type, office);

	onMount(() => {
	})
</script>

<button class="btn btn-xs btn-outline" class:btn-error={errors} class:btn-success={errors === 0} title={templates[type].title}>{templates[type].letter}</button>

<style>
</style>