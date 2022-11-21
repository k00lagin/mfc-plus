<script>
	import "./app.css"

	import { onMount } from "svelte";
	import {  } from "./api"
	import Header from './components/Header.svelte';
	import { routes, path, navigate } from "./routes";
	import { authorized } from "./stores.js";

	$: navigate($path, $authorized);

	onMount(() => {
	});
</script>

<Header></Header>
<div class="main">
	<svelte:component this={routes[$path].component}></svelte:component>
</div>
<svelte:window on:hashchange={navigate}/>

<style>
	:global(body) {
		display: flex;
		flex-flow: column nowrap;
	}
	.main {
		flex-grow: 1;
		height: calc(100% - 48px);
		padding: 8px 16px;
	}
</style>
<!-- <style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

:root,
body {
	margin: 0;
}
</style> -->
