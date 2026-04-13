import { fallbackReviews } from '$lib/data/reviews.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	// We return fallbackReviews by default to ensure the build (prerendering) never fails
	// due to the domain-restricted API key not working in GitHub Actions.
	// The real reviews will be fetched on the client-side in +page.svelte.
	return {
		reviews: fallbackReviews,
		rating: 5,
		ratingCount: 87
	};
};
