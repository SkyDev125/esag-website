<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import BookingCTA from '$lib/components/BookingCTA.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import type { PageData } from './$types.js';
	import { fetchGoogleReviews, type Review } from '$lib/data/reviews.js';

	let { data }: { data: PageData } = $props();

	// Store live results from the client-side fetch separately
	let liveData = $state<{ reviews: Review[]; rating: number | null; ratingCount: number | null } | null>(null);

	// Derive values: use live data if available, otherwise use data from the server (fallbacks)
	let reviews = $derived(liveData?.reviews ?? data.reviews);
	let rating = $derived(liveData?.rating ?? data.rating);
	let ratingCount = $derived(liveData?.ratingCount ?? data.ratingCount);

	// Fetch live reviews in the browser to support domain-locked API keys
	$effect(() => {
		fetchGoogleReviews().then((res) => {
			// Update the liveData state once the fetch completes
			if (res.reviews.length > 0 && res.reviews[0].source === 'google') {
				liveData = res;
			}
		});
	});

	// Scroll-reveal: mark all elements already at/above the viewport as
	// immediately visible (so anchor scroll positions are calculated correctly),
	// then animate the rest in as they scroll into view.
	$effect(() => {
		const viewportBottom = window.innerHeight;

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

		document.querySelectorAll('.reveal').forEach((el) => {
			const rect = el.getBoundingClientRect();
			// If the element is already at or above the fold, make it visible immediately
			// so it doesn't affect scroll position calculations for anchor links
			if (rect.top < viewportBottom) {
				el.classList.add('visible');
			} else {
				observer.observe(el);
			}
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Estética e Saúde Alexandra Gonçalves | Lisboa</title>
</svelte:head>

<Hero {rating} {ratingCount} />
<About />
<Services />
<BookingCTA />
<Reviews {reviews} />
