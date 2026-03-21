import { env } from '$env/dynamic/private';
import { fallbackReviews, mapGoogleReview, type Review } from '$lib/data/reviews.js';
import type { PageServerLoad } from './$types.js';

// Google Place ID for Estética e Saúde Alexandra Gonçalves, Lisboa
// Verified via Google Place ID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const PLACE_ID = 'ChIJk-rEK2EzGQ0RMCaXvfwJHiE';

export const load: PageServerLoad = async () => {
	const apiKey = env.GOOGLE_PLACES_API_KEY;
	let reviews: Review[] = fallbackReviews;

	if (!apiKey) {
		console.warn('GOOGLE_PLACES_API_KEY not set – using fallback reviews');
		return { reviews, rating: null, ratingCount: null };
	}

	try {
		const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
		const res = await fetch(url, {
			headers: {
				'X-Goog-Api-Key': apiKey,
				'X-Goog-FieldMask': 'reviews,rating,userRatingCount'
			}
		});

		if (!res.ok) {
			const errText = await res.text();
			console.error('Google Places API error:', res.status, errText);
			return { reviews, rating: null, ratingCount: null };
		}

		const data = await res.json();

		if (Array.isArray(data.reviews) && data.reviews.length > 0) {
			reviews = data.reviews.map(mapGoogleReview);
		}

		return {
			reviews,
			rating: (data.rating as number) ?? null,
			ratingCount: (data.userRatingCount as number) ?? null
		};
	} catch (err) {
		console.error('Failed to fetch Google Places reviews:', err);
		return { reviews, rating: null, ratingCount: null };
	}
};
