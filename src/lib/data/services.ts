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
	'Destaques',
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
		id: '12313945',
		category: 'Massagens',
		name: 'Massagem Relaxante',
		nameEn: 'Relaxing Massage',
		duration: '1h',
		price: '€40'
	},
	{
		id: '20853515',
		category: 'Massagens',
		name: 'Massagem Terapêutica',
		nameEn: 'Therapeutic Massage (knots/contractions)',
		duration: '1h',
		price: '€50'
	},
	{
		id: '12313920',
		category: 'Massagens',
		name: 'Drenagem Linfática',
		nameEn: 'Lymphatic Drainage',
		duration: '1h',
		price: '€45',
		featured: true
	},

	// ── Rosto ─────────────────────────────────────────────────────────────────
	{
		id: '12313846',
		category: 'Rosto',
		name: 'Limpeza de Pele Profunda',
		nameEn: 'Deep Skin Cleansing',
		duration: '1h',
		price: '€35',
		featured: true
	},
	{
		id: '12314276',
		category: 'Rosto',
		name: 'Esfoliação e Hidratação Facial',
		nameEn: 'Facial Exfoliation & Hydration',
		duration: '20min',
		price: '€20'
	},

	// ── Depilação Feminina ────────────────────────────────────────────────────
	{
		id: '12314283',
		category: 'Depilação Feminina',
		name: 'Depilação Completa',
		nameEn: 'Complete Hair Removal',
		duration: '45min',
		price: '€45'
	},
	{
		id: '26578246',
		category: 'Depilação Feminina',
		name: 'Brazilian Bikini Wax',
		duration: '15min',
		price: '€18'
	},
	{
		id: '12314156',
		category: 'Depilação Feminina',
		name: 'Virilha Completa',
		nameEn: 'Full Bikini / Full Crotch',
		duration: '15min',
		price: '€15',
		featured: true
	},
	{
		id: '18247369',
		category: 'Depilação Feminina',
		name: 'Glúteos',
		nameEn: 'Glutes',
		duration: '15min',
		price: '€10'
	},
	{
		id: '12314160',
		category: 'Depilação Feminina',
		name: 'Perna Inteira',
		nameEn: 'Whole Legs',
		duration: '25min',
		price: '€20',
		featured: true
	},
	{
		id: '12314166',
		category: 'Depilação Feminina',
		name: 'Meia Perna',
		nameEn: 'Half Leg',
		duration: '15min',
		price: '€11'
	},
	{
		id: '12314196',
		category: 'Depilação Feminina',
		name: 'Axilas',
		nameEn: 'Armpits',
		duration: '10min',
		price: '€8'
	},
	{
		id: '12314211',
		category: 'Depilação Feminina',
		name: 'Braços',
		nameEn: 'Arms',
		duration: '15min',
		price: '€15'
	},
	{
		id: '12314232',
		category: 'Depilação Feminina',
		name: 'Sobrancelha simples',
		nameEn: 'Simple Eyebrow',
		duration: '10min',
		price: '€6'
	},
	{
		id: '12314226',
		category: 'Depilação Feminina',
		name: 'Design de sobrancelha',
		nameEn: 'Eyebrow shaping',
		duration: '15min',
		price: '€8'
	},
	{
		id: '12314224',
		category: 'Depilação Feminina',
		name: 'Buço',
		nameEn: 'Upper Lip',
		duration: '5min',
		price: '€4'
	},
	{
		id: '12314190',
		category: 'Depilação Feminina',
		name: 'Virilha Cavada',
		nameEn: 'Simple groin',
		duration: '15min',
		price: '€10'
	},

	// ── Depilação Masculina ───────────────────────────────────────────────────
	{
		id: '20233030',
		category: 'Depilação Masculina',
		name: 'Costas',
		nameEn: 'Back',
		duration: '25min',
		price: '€20'
	},
	{
		id: '22994065',
		category: 'Depilação Masculina',
		name: 'Peito + Barriga',
		nameEn: 'Chest + Belly',
		duration: '1h',
		price: '€20'
	},
	{
		id: '20233049',
		category: 'Depilação Masculina',
		name: 'Perna Inteira',
		nameEn: 'Whole Leg',
		duration: '30min',
		price: '€25'
	},
	{
		id: '20233070',
		category: 'Depilação Masculina',
		name: 'Braços',
		nameEn: 'Arms',
		duration: '20min',
		price: '€19'
	},
	{
		id: '20233052',
		category: 'Depilação Masculina',
		name: 'Axilas',
		nameEn: 'Armpits',
		duration: '10min',
		price: '€8'
	},
	{
		id: '20296965',
		category: 'Depilação Masculina',
		name: 'Glúteos',
		nameEn: 'Glutes',
		duration: '15min',
		price: '€15'
	},
	{
		id: '20233008',
		category: 'Depilação Masculina',
		name: 'Peito',
		nameEn: 'Chest',
		duration: '25min',
		price: '€15'
	},
	{
		id: '20232985',
		category: 'Depilação Masculina',
		name: 'Virilha Integral',
		nameEn: 'Full Groin',
		duration: '25min',
		price: '€25',
		featured: true
	},

	// ── Mãos ──────────────────────────────────────────────────────────────────
	{
		id: '12314031',
		category: 'Mãos',
		name: 'Manicure + Gelinho',
		nameEn: 'Manicure + Semi-Permanent Gel',
		duration: '1h',
		price: '€17',
		featured: true
	},
	{
		id: '22004669',
		category: 'Mãos',
		name: 'Remoção de Gelinho + Manicure Normal',
		nameEn: 'Gel Removal + Normal Manicure',
		duration: '1h 35min',
		price: '€15'
	},
	{
		id: '12314054',
		category: 'Mãos',
		name: 'Manicure Normal',
		nameEn: 'Normal Manicure',
		duration: '45min',
		price: '€10'
	},
	{
		id: '18168987',
		category: 'Mãos',
		name: 'Mudança de Verniz',
		nameEn: 'Nail Polish Change',
		duration: '10min',
		price: '€6,50'
	},
	{
		id: '13035040',
		category: 'Mãos',
		name: 'Remoção de Gel',
		nameEn: 'Gel Removal',
		duration: '1h',
		price: '€12'
	},
	{
		id: '12314073',
		category: 'Mãos',
		name: 'Remoção de Gelinho',
		nameEn: 'Gel Polish Removal',
		duration: '1h',
		price: '€12'
	},

	// ── Pés ───────────────────────────────────────────────────────────────────
	{
		id: '12314000',
		category: 'Pés',
		name: 'Pedicure + Gelinho',
		nameEn: 'Pedicure + Gel',
		duration: '1h',
		price: '€22.5'
	},
	{
		id: '13034993',
		category: 'Pés',
		name: 'Pedicure Simples',
		nameEn: 'Simple Pedicure',
		duration: '45min',
		price: '€20'
	},
	{
		id: '12314124',
		category: 'Pés',
		name: 'Pedicure Calista',
		nameEn: 'Callus Pedicure',
		duration: '1h',
		price: '€25'
	},
	{
		id: '13034946',
		category: 'Pés',
		name: 'Embelezamento das Unhas dos Pés',
		nameEn: 'Toenail Beautification',
		duration: '30min',
		price: '€15'
	}
];

export const featuredServices = services.filter((s) => s.featured);
