<script lang="ts">
	import type { Service } from '$lib/data/services.js';

	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd';

	let { service }: { service: Service } = $props();

	const categoryColors: Record<string, string> = {
		Massagens: '#ddedc8',
		Rosto: '#fce4d6',
		'Depilação Feminina': '#f3e8ff',
		'Depilação Masculina': '#dbeafe',
		Mãos: '#fef9c3',
		Pés: '#d1fae5'
	};

	const categoryIcons: Record<string, string> = {
		Massagens: '🌿',
		Rosto: '✨',
		'Depilação Feminina': '🌸',
		'Depilação Masculina': '💪',
		Mãos: '💅',
		Pés: '🦶'
	};

	const color = $derived(categoryColors[service.category] ?? '#faf7f2');
	const icon = $derived(categoryIcons[service.category] ?? '✦');
</script>

<article class="service-card" class:featured={service.featured}>
	{#if service.featured}
		<div class="featured-tag">Destaque</div>
	{/if}

	<div class="card-top" style="background: {color}">
		<span class="card-icon" aria-hidden="true">{icon}</span>
	</div>

	<div class="card-body">
		<div class="card-meta">
			<span class="category-badge">{service.category}</span>
			<span class="duration">
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
				</svg>
				{service.duration}
			</span>
		</div>

		<h3 class="card-title">{service.name}</h3>
		{#if service.nameEn}
			<p class="card-name-en">{service.nameEn}</p>
		{/if}

		<div class="card-footer">
			<span class="price">{service.price}</span>
			<a
				href={BOOKING_URL}
				target="_blank"
				rel="noopener"
				class="book-btn"
				aria-label="Agendar {service.name}"
			>
				Agendar
				<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>
	</div>
</article>

<style>
	.service-card {
		position: relative;
		background: var(--white);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-card);
		overflow: hidden;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease;
		border: 1px solid rgba(0, 0, 0, 0.06);
	}

	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-hover);
	}

	.service-card.featured {
		border-color: rgba(201, 168, 76, 0.3);
	}

	.featured-tag {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		background: linear-gradient(135deg, var(--gold), var(--gold-light));
		color: var(--forest);
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-xl);
		z-index: 1;
	}

	.card-top {
		height: 72px;
		display: flex;
		align-items: center;
		padding: 0 1.25rem;
	}

	.card-icon {
		font-size: 2rem;
	}

	.card-body {
		padding: 1.125rem 1.25rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.card-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.category-badge {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--forest-light);
	}

	.duration {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.75rem;
		color: var(--text-light);
		font-weight: 500;
	}

	.card-title {
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		color: var(--forest);
		line-height: 1.3;
	}

	.card-name-en {
		font-size: 0.8rem;
		color: var(--text-light);
		font-style: italic;
		margin-top: -0.25rem;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 0.75rem;
		padding-top: 0.875rem;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	.price {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--forest);
	}

	.book-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		background: var(--forest);
		color: var(--white);
		border-radius: var(--radius-xl);
		padding: 0.45rem 1rem;
		font-size: 0.8125rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background 0.2s,
			transform 0.2s;
	}

	.book-btn:hover {
		background: var(--forest-light);
		transform: translateX(2px);
	}
</style>
