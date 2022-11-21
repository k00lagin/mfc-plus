<script>
	import { user, authorized } from "../stores.js";
</script>

<header>
	<ul class="toolbar">
		<a href="/mfc-plus" class="btn btn-sm btn-ghost" on:click|preventDefault={() => {
			location.hash = '';
		}}>МРС МФЦ+</a>
		{#if $authorized}
			<a href="#templates" class="btn btn-sm btn-ghost">Шаблоны</a>
		{/if}
	</ul>
	{#if $authorized}
		<a href="#user" class="btn btn-sm btn-ghost">{$user.fio}</a>
		<a href="#settings" class="ml-1 btn btn-ghost btn-sm btn-square">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
			</svg>
		</a>
	{:else}
		<button class="btn btn-sm btn-ghost" on:click={()=> {
			window.open('https://xn--d1achjhdicc8bh4h.xn--p1ai/mfc/esia/Login', '_blank', 'popup');
		}}>Войти через ЕСИА</button>
	{/if}

	
</header>

<style>
	header {
		height: 48px;
		width: 100%;
		background-color: #16f;
		color: #fff;
		box-shadow: 0 1px 0;
		display: flex;
		align-items: center;
		padding: 0 8px;
	}
	.toolbar {
		margin-right: auto;
	}
</style>
