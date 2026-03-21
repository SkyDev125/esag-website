<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import BookingCTA from '$lib/components/BookingCTA.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	// Scroll-reveal: immediately visible elements get .visible on mount,
	// the rest animate in as they scroll into view.
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
		);

		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Estética e Saúde Alexandra Gonçalves | Lisboa</title>
</svelte:head>

<Hero rating={data.rating} ratingCount={data.ratingCount} />
<About />
<Services />
<BookingCTA />
<Reviews reviews={data.reviews} />
