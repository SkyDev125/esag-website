// Google Place ID for Estética e Saúde Alexandra Gonçalves, Lisboa
// Verified via Google Place ID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
export const PLACE_ID = 'ChIJk-rEK2EzGQ0RMCaXvfwJHiE';

// Google Places API Key
// Since this key is locked to the domain (estetica-saude-portugal.com), it is safe to include in the client code.
// Fetching during build time (prerendering) will fail because Google restricts the request origin.
export const GOOGLE_API_KEY = 'AIzaSyDee2Hkam9BY0ApUkOIu8SnwVyhab3K53E';

export type Review = {
	id: string;
	author: string;
	avatar?: string; // initials fallback
	rating: number; // 1-5
	text: string;
	date: string;
	source: 'google' | 'static';
};

// Static fallback reviews shown when Google Places API is unavailable
export const fallbackReviews: Review[] = [
	{
		id: 'r1',
		author: 'Mariana S.',
		rating: 5,
		text: 'Adorei a experiência! A Alexandra é extremamente profissional e atenciosa. A massagem relaxante foi incrível, saí completamente renovada. Recomendo a toda a gente!',
		date: '2025-02-10',
		source: 'static'
	},
	{
		id: 'r2',
		author: 'João P.',
		rating: 5,
		text: 'Excelente serviço de depilação masculina. O espaço é muito limpo e acolhedor, e a profissional muito competente. Já voltei várias vezes e nunca me desiludiu.',
		date: '2025-01-22',
		source: 'static'
	},
	{
		id: 'r3',
		author: 'Catarina M.',
		rating: 5,
		text: 'A limpeza de pele profunda é fantástica! Resultados visíveis imediatamente. O espaço é tranquilo, perfeito para relaxar. A Alexandra explica tudo o que está a fazer.',
		date: '2025-03-05',
		source: 'static'
	},
	{
		id: 'r4',
		author: 'Sofia R.',
		rating: 5,
		text: 'Fiz a manicure com gelinho e ficou perfeita! Dura muito mais do que noutros sítios que já fui. Ótima localização perto do Marquês de Pombal, preços muito justos.',
		date: '2025-02-28',
		source: 'static'
	},
	{
		id: 'r5',
		author: 'Alexandre F.',
		rating: 5,
		text: 'A drenagem linfática foi uma descoberta! Nota-se a diferença logo na sessão. A Alexandra é muito experiente e o ambiente é super relaxante. Vou continuar a fazer.',
		date: '2025-01-15',
		source: 'static'
	}
];

export function mapGoogleReview(raw: GoogleReview): Review {
	return {
		id: raw.name,
		author: raw.authorAttribution.displayName,
		avatar: raw.authorAttribution.photoUri,
		rating: raw.rating,
		text: raw.text?.text ?? '',
		date: raw.publishTime,
		source: 'google'
	};
}

// Matches the Google Places API v1 review shape
export type GoogleReview = {
	name: string;
	rating: number;
	text?: { text: string; languageCode: string };
	publishTime: string;
	authorAttribution: {
		displayName: string;
		uri: string;
		photoUri: string;
	};
};

export async function fetchGoogleReviews(): Promise<{
	reviews: Review[];
	rating: number | null;
	ratingCount: number | null;
}> {
	let reviews: Review[] = fallbackReviews;

	try {
		const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
		const res = await fetch(url, {
			headers: {
				'X-Goog-Api-Key': GOOGLE_API_KEY,
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
}
