<script lang="ts">
	import type { Service } from '$lib/data/services.js';
	import { i18n, t } from '$lib/i18n.svelte';


	let { service }: { service: Service } = $props();

	const categoryStyles: Record<string, { bg: string; color: string }> = {
		Massagens: { bg: '#ddedc8', color: '#5a822B' }, // Darker green for icon
		Rosto: { bg: '#fce4d6', color: '#b96b42' },
		'Depilação Feminina': { bg: '#f3e8ff', color: '#7e22ce' },
		'Depilação Masculina': { bg: '#dbeafe', color: '#1d4ed8' },
		Mãos: { bg: '#fef9c3', color: '#a16207' },
		Pés: { bg: '#d1fae5', color: '#047857' }
	};

	const categoryIcons: Record<string, string> = {
		Massagens:
			'<path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
		Rosto:
			'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
		'Depilação Feminina':
			'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
		'Depilação Masculina':
			'<circle cx="6" cy="6" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
		Mãos: '<g transform="scale(0.0375)" fill="currentColor" stroke="none"><path d="M106.66,170.64l.09,0,49.55-20.65a7.32,7.32,0,0,0,3.68-6h0a7.29,7.29,0,0,0-3.68-6l-49.57-20.67-.07,0L86,67.68a6.66,6.66,0,0,0-11.92,0l-20.7,49.63-.05,0L3.7,138A7.29,7.29,0,0,0,0,144H0a7.32,7.32,0,0,0,3.68,6L53.27,170.6l.07,0L74,220.26a6.65,6.65,0,0,0,11.92,0l20.69-49.62ZM471.38,467.41l-1-.42-1-.5a38.67,38.67,0,0,1,0-69.14l1-.49,1-.43,37.49-15.63,15.63-37.48.41-1,.47-.95c3.85-7.74,10.58-13.63,18.35-17.34,0-1.33.25-2.69.27-4V144a32,32,0,0,0-64,0v72a8,8,0,0,1-8,8H456a8,8,0,0,1-8-8V64a32,32,0,0,0-64,0V216a8,8,0,0,1-8,8H360a8,8,0,0,1-8-8V32a32,32,0,0,0-64,0V216a8,8,0,0,1-8,8H264a8,8,0,0,1-8-8V64a32,32,0,0,0-64,0v241l-23.59-32.49a40,40,0,0,0-64.71,47.09L229.3,492.21A48.07,48.07,0,0,0,268.09,512H465.7c19.24,0,35.65-11.73,43.24-28.79l-.07-.17ZM349.79,339.52,320,351.93l-12.42,29.78a4,4,0,0,1-7.15,0L288,351.93l-29.79-12.41a4,4,0,0,1,0-7.16L288,319.94l12.42-29.78a4,4,0,0,1,7.15,0L320,319.94l29.79,12.42a4,4,0,0,1,0,7.16ZM640,431.91a7.28,7.28,0,0,0-3.68-6l-49.57-20.67-.07,0L566,355.63a6.66,6.66,0,0,0-11.92,0l-20.7,49.63-.05,0L483.7,426a7.28,7.28,0,0,0-3.68,6h0a7.29,7.29,0,0,0,3.68,5.95l49.57,20.67.07,0L554,508.21a6.65,6.65,0,0,0,11.92,0l20.69-49.62h0l.09,0,49.55-20.66a7.29,7.29,0,0,0,3.68-5.95h0Z"/></g>',
		Pés: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
	};

	const defaultStyle = { bg: '#faf7f2', color: '#1e3a12' };
	const style = $derived(categoryStyles[service.category] ?? defaultStyle);

	const iconPath = $derived(
		categoryIcons[service.category] ??
			'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
	);
</script>

<article class="service-card group" class:featured={service.featured}>
	{#if service.featured}
		<div class="featured-tag">{t('services.featured')}</div>
	{/if}

	<div class="card-body">
		<div class="card-meta">
			<div class="icon-wrapper" style="background: {style.bg}; color: {style.color};">
				<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
					{@html iconPath}
				</svg>
			</div>

			<div class="meta-info">
				<span class="category-badge">{t(`categories.${service.category}`)}</span>
				<span class="duration">
					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
					</svg>
					{service.duration}
				</span>
			</div>
		</div>

		<div class="card-content">
			{#if i18n.locale === 'en' && service.nameEn}
				<h3 class="card-title">{service.nameEn}</h3>
				<p class="card-name-en">{service.name}</p>
			{:else}
				<h3 class="card-title">{service.name}</h3>
				{#if service.nameEn}
					<p class="card-name-en">{service.nameEn}</p>
				{/if}
			{/if}
		</div>

		<div class="card-footer">
			<span class="price">{service.price}</span>
			<a
				href={`https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd/booking?menu=true&offerItems=sv%3A${service.id}`}
				target="_blank"
				rel="noopener"
				class="book-btn"
				aria-label="{t('services.book')} {service.name}"
			>
				{t('services.book')}
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
		border: 1px solid rgba(0, 0, 0, 0.04);
		display: flex;
		flex-direction: column;
		height: 100%;
		transition:
			transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
			border-color 0.3s ease;
	}

	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-hover);
		border-color: rgba(30, 58, 15, 0.1);
	}

	.service-card.featured {
		border: 1px solid rgba(201, 168, 76, 0.4);
	}

	.service-card.featured:hover {
		border-color: rgba(201, 168, 76, 0.6);
	}

	.featured-tag {
		position: absolute;
		top: 1.25rem;
		right: 1.25rem;
		background: linear-gradient(135deg, var(--gold), var(--gold-light));
		color: var(--forest);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.35rem 0.8rem;
		border-radius: 99px;
		box-shadow: 0 4px 12px rgba(201, 168, 76, 0.25);
		z-index: 10;
	}

	.card-body {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 1.25rem;
	}

	.card-meta {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.icon-wrapper {
		width: 3.25rem;
		height: 3.25rem;
		border-radius: var(--radius-lg);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.meta-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-top: 0.25rem;
	}

	.category-badge {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--forest-light);
	}

	.duration {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8rem;
		color: var(--text-light);
		font-weight: 500;
	}

	.card-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card-title {
		font-family: var(--font-serif);
		font-size: 1.15rem;
		color: var(--forest);
		line-height: 1.3;
		margin-bottom: 0.25rem;
	}

	.card-name-en {
		font-size: 0.85rem;
		color: var(--text-light);
		font-style: italic;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 1.25rem;
		margin-top: auto;
		border-top: 1px solid rgba(0, 0, 0, 0.04);
	}

	.price {
		font-family: var(--font-serif);
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--forest);
	}

	.book-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: var(--forest);
		background: transparent;
		border: 1.5px solid var(--forest);
		border-radius: 99px;
		padding: 0.45rem 1rem;
		font-size: 0.8125rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.book-btn:hover {
		background: var(--forest);
		color: var(--white);
		transform: translateX(2px);
	}
</style>
