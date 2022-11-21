import App from './my-documents-mfc-plus/App.svelte';

document.body.innerHTML = '';

const app = new App({
	target: document.body
});

export default app;