<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { dev, browser } from '$app/environment';

	let { children } = $props();

	if (dev && browser) {
		navigator.serviceWorker.getRegistrations().then((registrations) => {
			for (const registration of registrations) {
				registration.unregister();
			}
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
