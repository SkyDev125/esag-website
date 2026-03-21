export type Locale = 'pt' | 'en';

export const i18n = $state({
	locale: 'pt' as Locale
});

export function initLanguage() {
	if (typeof window === 'undefined') return;
	
	const saved = localStorage.getItem('locale');
	if (saved === 'en' || saved === 'pt') {
		i18n.locale = saved;
		return;
	}
	
	const browserLang = window.navigator.language;
	if (browserLang && browserLang.toLowerCase().startsWith('en')) {
		i18n.locale = 'en';
	}
}

export function setLanguage(loc: Locale) {
	i18n.locale = loc;
	if (typeof window !== 'undefined') {
		localStorage.setItem('locale', loc);
	}
}

type Dictionary = {
	nav: Record<string, string>;
	hero: Record<string, string>;
	about: Record<string, string>;
	services: Record<string, string>;
	categories?: Record<string, string>;
	reviews: Record<string, string>;
	cta: Record<string, string>;
	footer: Record<string, any>;
};

export const dict: Record<Locale, Dictionary> = {
	pt: {
		nav: {
			about: 'Sobre',
			services: 'Serviços',
			reviews: 'Avaliações',
			contact: 'Contacto',
			book: 'Agendar',
			bookNow: 'Agendar Agora'
		},
		hero: {
			badge: 'Lisboa · Marquês de Pombal',
			title1: 'Sinta-se',
			titleHighlight: 'renovada',
			title2: 'a cada visita',
			sub: 'Centro de estética profissional em Lisboa. Massagens, faciais, manicure, pedicure e depilação — com o cuidado que merece.',
			book: 'Agendar Agora',
			services: 'Ver Serviços',
			ratingGoogle: 'avaliações no Google',
			ratingExcellent: 'Excelente · Altamente recomendada',
			statServices: 'Serviços',
			statRating: 'Avaliação',
			statSatisfaction: 'Satisfação',
			pill1: 'Drenagem Linfática',
			pill2: 'Limpeza de Pele',
			scrollHint: 'Descubra mais'
		},
		about: {
			label: 'Sobre nós',
			title1: 'Cuidado profissional,',
			title2: 'experiência única',
			subtitle:
				'Bem-vindo ao nosso centro de estética em Lisboa! Oferecemos uma ampla variedade de serviços de cuidados pessoais, incluindo massagens relaxantes e terapêuticas, drenagem linfática, tratamentos faciais não invasivos, manicure, pedicure e depilação.',
			text: 'A nossa profissional altamente qualificada está pronta para ajudá-lo a cuidar de si e sentir-se renovado. Agende hoje uma consulta connosco e experimente a diferença de uma esteticista de alta qualidade.',
			attr1: 'Negócio feminino',
			attr2: 'LGBTQ+ friendly',
			attr3: 'Eco-consciente',
			attr4: 'Pet-friendly',
			attr5: 'Família bem-vinda',
			attr6: 'Acessível',
			badge: 'Altamente qualificada',
			locationSub: 'Próximo de transporte público'
		},
		services: {
			label: 'Os nossos serviços',
			title1: 'Tudo o que precisa,',
			title2: 'num só lugar',
			subtitle: 'serviços disponíveis. Escolha a categoria e agende directamente na Fresha.',
			notePre: 'Preços e disponibilidade actualizados em',
			featured: 'Destaque',
			book: 'Agendar'
		},
		reviews: {
			label: 'Avaliações',
			title: 'O que dizem as nossas clientes',
			subtitle:
				'Avaliações reais de clientes. A satisfação de cada pessoa é a nossa maior recompensa.',
			leaveReview: 'Ficou satisfeita? Partilhe a sua experiência!',
			leaveReviewBtn: 'Deixar avaliação no Google'
		},
		cta: {
			label: 'Pronta para começar?',
			title: 'Reserve hoje, sinta-se renovada amanhã.',
			sub: 'Marque a sua consulta online em segundos. Escolha o horário que lhe convém e deixe o resto connosco.',
			book: 'Agendar na Fresha',
			hilight1: 'Sem taxas de marcação',
			hilight2: 'Confirmação imediata',
			hilight3: 'Cancelamento fácil'
		},
		footer: {
			desc: 'Centro de estética profissional em Lisboa. Cuidamos de si com dedicação e qualidade.',
			hours: 'Horário',
			location: 'Localização',
			closed: 'Encerrado',
			days: {
				1: 'Segunda-feira',
				2: 'Terça-feira',
				3: 'Quarta-feira',
				4: 'Quinta-feira',
				5: 'Sexta-feira',
				6: 'Sábado',
				0: 'Domingo'
			},
			linksMap: 'Ver no Google Maps',
			linksBook: 'Marcações na Fresha',
			accessWheelchair: 'Acessível a cadeiras de rodas',
			accessTransport: 'Próximo de transportes públicos'
		}
	},
	en: {
		nav: {
			about: 'About',
			services: 'Services',
			reviews: 'Reviews',
			contact: 'Contact',
			book: 'Book',
			bookNow: 'Book Now'
		},
		hero: {
			badge: 'Lisbon · Marquês de Pombal',
			title1: 'Feel',
			titleHighlight: 'renewed',
			title2: 'every visit',
			sub: 'Professional aesthetics center in Lisbon. Massages, facials, manicure, pedicure, and waxing — with the care you deserve.',
			book: 'Book Now',
			services: 'View Services',
			ratingGoogle: 'Google reviews',
			ratingExcellent: 'Excellent · Highly recommended',
			statServices: 'Services',
			statRating: 'Rating',
			statSatisfaction: 'Satisfaction',
			pill1: 'Lymphatic Drainage',
			pill2: 'Skin Cleansing',
			scrollHint: 'Discover more'
		},
		about: {
			label: 'About us',
			title1: 'Professional care,',
			title2: 'unique experience',
			subtitle:
				'Welcome to our aesthetic center in Lisbon! We offer a wide variety of personal care services, including relaxing and therapeutic massages, lymphatic drainage, non-invasive facial treatments, manicure, pedicure, and waxing.',
			text: 'Our highly qualified professional is ready to help you take care of yourself and feel renewed. Book an appointment with us today and experience the difference of a high-quality aesthetician.',
			attr1: 'Female-owned',
			attr2: 'LGBTQ+ friendly',
			attr3: 'Eco-conscious',
			attr4: 'Pet-friendly',
			attr5: 'Family welcome',
			attr6: 'Accessible',
			badge: 'Highly qualified',
			locationSub: 'Near public transport'
		},
		services: {
			label: 'Our services',
			title1: 'Everything you need,',
			title2: 'in one place',
			subtitle: 'services available. Choose your category and book directly on Fresha.',
			notePre: 'Prices and availability updated on',
			featured: 'Featured',
			book: 'Book'
		},
		categories: {
			Todos: 'All',
			Massagens: 'Massages',
			Rosto: 'Face',
			'Depilação Feminina': 'Female Waxing',
			'Depilação Masculina': 'Male Waxing',
			Mãos: 'Hands',
			Pés: 'Feet'
		},
		reviews: {
			label: 'Reviews',
			title: 'What our clients say',
			subtitle: "Real client reviews. Every person's satisfaction is our greatest reward.",
			leaveReview: 'Satisfied? Share your experience!',
			leaveReviewBtn: 'Leave a review on Google'
		},
		cta: {
			label: 'Ready to start?',
			title: 'Book today, feel renewed tomorrow.',
			sub: 'Book your appointment online in seconds. Choose the time that fits you and leave the rest to us.',
			book: 'Book on Fresha',
			hilight1: 'No booking fees',
			hilight2: 'Instant confirmation',
			hilight3: 'Easy cancellation'
		},
		footer: {
			desc: 'Professional aesthetics center in Lisbon. We take care of you with dedication and quality.',
			hours: 'Hours',
			location: 'Location',
			closed: 'Closed',
			days: {
				1: 'Monday',
				2: 'Tuesday',
				3: 'Wednesday',
				4: 'Thursday',
				5: 'Friday',
				6: 'Saturday',
				0: 'Sunday'
			},
			linksMap: 'View on Google Maps',
			linksBook: 'Book on Fresha',
			accessWheelchair: 'Wheelchair accessible',
			accessTransport: 'Near public transit'
		}
	}
};

export function t(keyStr: string): string {
	const keys = keyStr.split('.');
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let value: any = dict[i18n.locale];
	
	for (const k of keys) {
		if (value === undefined || value === null) {
			// Fallback to PT if key is missing in EN
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			let fallback: any = dict['pt'];
			for (const fallbackKey of keys) {
				if (fallback === undefined || fallback === null) return keyStr;
				fallback = (fallback as any)[fallbackKey];
			}
			return (fallback as unknown as string) || keyStr;
		}
		value = value[k];
	}
	
	if (value === undefined) {
		// Fallback to PT
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let fallback: any = dict['pt'];
		for (const fallbackKey of keys) {
			if (fallback === undefined || fallback === null) return keyStr;
			fallback = (fallback as any)[fallbackKey];
		}
		return (fallback as unknown as string) || keyStr;
	}
	
	return value || keyStr;
}
