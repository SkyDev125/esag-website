export type Service = {
	id: string;
	category: string;
	name: string;
	nameEn?: string;
	duration: string; // e.g. "1h", "45min"
	price: string; // e.g. "€45" or "desde €17"
	featured?: boolean;
};

export const CATEGORIES = [
	'Todos',
	'Massagens',
	'Rosto',
	'Depilação Feminina',
	'Depilação Masculina',
	'Mãos',
	'Pés'
] as const;

export type Category = (typeof CATEGORIES)[number];

export const services: Service[] = [
	// ── Massagens ─────────────────────────────────────────────────────────────
	{
		id: 'mass-relaxante',
		category: 'Massagens',
		name: 'Massagem Relaxante',
		nameEn: 'Relaxing Massage',
		duration: '1h',
		price: '€40',
		featured: true
	},
	{
		id: 'mass-terapeutica',
		category: 'Massagens',
		name: 'Massagem Terapêutica',
		nameEn: 'Therapeutic Massage (knots/contractions)',
		duration: '1h',
		price: '€50',
		featured: true
	},
	{
		id: 'mass-drenagem',
		category: 'Massagens',
		name: 'Drenagem Linfática',
		nameEn: 'Lymphatic Drainage',
		duration: '1h',
		price: '€45',
		featured: true
	},

	// ── Rosto ─────────────────────────────────────────────────────────────────
	{
		id: 'rosto-limpeza',
		category: 'Rosto',
		name: 'Limpeza de Pele Profunda',
		nameEn: 'Deep Skin Cleansing',
		duration: '1h',
		price: '€35',
		featured: true
	},
	{
		id: 'rosto-esfoliacao',
		category: 'Rosto',
		name: 'Esfoliação e Hidratação Facial',
		nameEn: 'Facial Exfoliation & Hydration',
		duration: '20min',
		price: '€20'
	},

	// ── Depilação Feminina ────────────────────────────────────────────────────
	{
		id: 'dep-f-total',
		category: 'Depilação Feminina',
		name: 'Depilação Total',
		nameEn: 'Total Hair Removal',
		duration: '1h',
		price: '€42'
	},
	{
		id: 'dep-f-completa',
		category: 'Depilação Feminina',
		name: 'Depilação Completa Feminina',
		nameEn: 'Full Female Waxing',
		duration: '45min',
		price: '€35'
	},
	{
		id: 'dep-f-brazilian',
		category: 'Depilação Feminina',
		name: 'Brazilian Bikini Wax',
		duration: '15min',
		price: '€18'
	},
	{
		id: 'dep-f-virilha',
		category: 'Depilação Feminina',
		name: 'Virilha Completa',
		nameEn: 'Full Bikini / Full Crotch',
		duration: '15min',
		price: '€15'
	},
	{
		id: 'dep-f-glúteos',
		category: 'Depilação Feminina',
		name: 'Glúteos',
		nameEn: 'Glutes',
		duration: '15min',
		price: '€10'
	},
	{
		id: 'dep-f-pernas',
		category: 'Depilação Feminina',
		name: 'Pernas Inteiras',
		nameEn: 'Whole Legs',
		duration: '25min',
		price: '€20'
	},
	{
		id: 'dep-f-meia-perna',
		category: 'Depilação Feminina',
		name: 'Meia Perna',
		nameEn: 'Half Leg',
		duration: '15min',
		price: '€11'
	},
	{
		id: 'dep-f-axilas',
		category: 'Depilação Feminina',
		name: 'Axilas',
		nameEn: 'Armpits',
		duration: '10min',
		price: '€8'
	},
	{
		id: 'dep-f-bracos',
		category: 'Depilação Feminina',
		name: 'Braços',
		nameEn: 'Arms',
		duration: '15min',
		price: '€15'
	},
	{
		id: 'dep-f-barriga',
		category: 'Depilação Feminina',
		name: 'Barriga',
		nameEn: 'Belly',
		duration: '15min',
		price: '€10'
	},

	// ── Depilação Masculina ───────────────────────────────────────────────────
	{
		id: 'dep-m-costas',
		category: 'Depilação Masculina',
		name: 'Costas',
		nameEn: 'Back',
		duration: '25min',
		price: '€20'
	},
	{
		id: 'dep-m-peito',
		category: 'Depilação Masculina',
		name: 'Peito + Barriga',
		nameEn: 'Chest + Belly',
		duration: '1h',
		price: '€20'
	},
	{
		id: 'dep-m-perna',
		category: 'Depilação Masculina',
		name: 'Perna Inteira',
		nameEn: 'Whole Leg',
		duration: '30min',
		price: '€25'
	},
	{
		id: 'dep-m-bracos',
		category: 'Depilação Masculina',
		name: 'Braços',
		nameEn: 'Arms',
		duration: '20min',
		price: '€19'
	},
	{
		id: 'dep-m-axilas',
		category: 'Depilação Masculina',
		name: 'Axilas',
		nameEn: 'Armpits',
		duration: '10min',
		price: '€8'
	},
	{
		id: 'dep-m-gluteos',
		category: 'Depilação Masculina',
		name: 'Glúteos',
		nameEn: 'Glutes',
		duration: '15min',
		price: '€15'
	},

	// ── Mãos ──────────────────────────────────────────────────────────────────
	{
		id: 'maos-manicure-gel',
		category: 'Mãos',
		name: 'Manicure + Gelinho',
		nameEn: 'Manicure + Semi-Permanent Gel',
		duration: '1h',
		price: 'desde €17',
		featured: true
	},
	{
		id: 'maos-remocao-gel',
		category: 'Mãos',
		name: 'Remoção de Gelinho + Manicure Normal',
		nameEn: 'Gel Removal + Normal Manicure',
		duration: '1h 35min',
		price: '€15'
	},
	{
		id: 'maos-app-gel',
		category: 'Mãos',
		name: 'Aplicação de Verniz Gelinho',
		nameEn: 'Gel Polish Application',
		duration: '45min',
		price: '€15'
	},
	{
		id: 'maos-manicure-normal',
		category: 'Mãos',
		name: 'Manicure Normal',
		nameEn: 'Normal Manicure',
		duration: '45min',
		price: '€10'
	},
	{
		id: 'maos-verniz',
		category: 'Mãos',
		name: 'Mudança de Verniz',
		nameEn: 'Nail Polish Change',
		duration: '10min',
		price: '€6,50'
	},

	// ── Pés ───────────────────────────────────────────────────────────────────
	{
		id: 'pes-pedicure-gel',
		category: 'Pés',
		name: 'Pedicure + Gelinho',
		nameEn: 'Pedicure + Gel',
		duration: '1h',
		price: '€30'
	},
	{
		id: 'pes-pedicure-simples',
		category: 'Pés',
		name: 'Pedicure Simples',
		nameEn: 'Simple Pedicure',
		duration: '45min',
		price: '€20'
	},
	{
		id: 'pes-pedicure-masc',
		category: 'Pés',
		name: 'Pedicure Masculina',
		nameEn: 'Male Pedicure',
		duration: '45min',
		price: '€20'
	},
	{
		id: 'pes-embelezamento',
		category: 'Pés',
		name: 'Embelezamento das Unhas dos Pés',
		nameEn: 'Toenail Beautification',
		duration: '30min',
		price: '€15'
	}
];

export const featuredServices = services.filter((s) => s.featured);
