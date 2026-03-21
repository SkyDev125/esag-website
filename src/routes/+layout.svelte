<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initLanguage } from '$lib/i18n.svelte';

	let { children } = $props();

	$effect(() => {
		initLanguage();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
