<script lang="ts">
	import { services, CATEGORIES, type Category } from '$lib/data/services.js';
	import ServiceCard from './ServiceCard.svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { t } from '$lib/i18n.svelte';

	let activeCategory: Category = $state('Todos');
	let showAll = $state(false);

	const filtered = $derived(
		activeCategory === 'Todos' ? services : services.filter((s) => s.category === activeCategory)
	);

	const visibleServices = $derived(
		showAll ? filtered : filtered.slice(0, 10)
	);

	function toggleShowMore() {
		showAll = !showAll;
		if (!showAll) {
			// Small delay to allow DOM to update, optional
			setTimeout(() => {
				const section = document.getElementById('serviços');
				if (section) {
					const y = section.getBoundingClientRect().top + window.scrollY - 80;
					window.scrollTo({ top: y, behavior: 'smooth' });
				}
			}, 10);
		}
	}
</script>

<section class="services-section section" id="serviços">
	<div class="wrapper">
		<!-- Header -->
		<div class="services-header">
			<p class="section-label reveal">{t('services.label')}</p>
			<h2 class="section-title reveal reveal-delay-1">
				{t('services.title1')}<br />{t('services.title2')}
			</h2>
			<p class="section-subtitle reveal reveal-delay-2">
				{services.length}
				{t('services.subtitle')}
			</p>
		</div>

		<!-- Category tabs -->
		<div class="tabs-container reveal reveal-delay-2">
			<div class="tabs" role="tablist" aria-label="Categorias de serviços">
				{#each CATEGORIES as cat}
					<button
						role="tab"
						class="tab"
						class:active={activeCategory === cat}
						aria-selected={activeCategory === cat}
						onclick={() => { activeCategory = cat; showAll = false; }}
					>
						{t(`categories.${cat}`)}
					</button>
				{/each}
			</div>
		</div>

		<!-- Grid -->
		<div class="services-grid" role="tabpanel">
			{#each visibleServices as service (service.id)}
				<div animate:flip={{ duration: 300 }} in:fade={{ duration: 200 }}>
					<ServiceCard {service} />
				</div>
			{/each}
		</div>

		{#if filtered.length > 10}
			<div class="show-more-container reveal">
				<button class="btn btn-outline" onclick={toggleShowMore}>
					{showAll ? t('services.showLess') : t('services.showMore')}
				</button>
			</div>
		{/if}

		<p class="services-note reveal">
			{t('services.notePre')}
			<a
				href="https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd"
				target="_blank"
				rel="noopener">Fresha</a
			>.
		</p>
	</div>
</section>

<style>
	.services-section {
		background: var(--white);
		position: relative;
	}

	.services-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
	}

	.services-header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.services-header .section-subtitle {
		margin-inline: auto;
	}

	/* Tabs */
	.tabs-container {
		display: flex;
		justify-content: center;
		margin-bottom: 3.5rem;
		padding-inline: 1rem;
	}

	.tabs {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		background: var(--cream);
		padding: 0.35rem;
		border-radius: 99px;
		border: 1px solid rgba(0, 0, 0, 0.03);
	}

	.tab {
		padding: 0.6rem 1.25rem;
		border-radius: 99px;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		border: none;
		background: transparent;
		color: var(--text-mid);
		transition: all 0.25s ease;
	}

	.tab:hover:not(.active) {
		color: var(--forest);
		background: rgba(30, 58, 15, 0.04);
	}

	.tab.active {
		background: var(--white);
		color: var(--forest);
		font-weight: 600;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	/* Grid */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.show-more-container {
		display: flex;
		justify-content: center;
		margin-bottom: 3.5rem;
	}

	.show-more-container .btn {
		padding: 0.75rem 2rem;
		font-size: 0.95rem;
	}

	.services-note {
		text-align: center;
		font-size: 0.875rem;
		color: var(--text-light);
	}

	.services-note a {
		color: var(--forest-light);
		font-weight: 500;
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: text-decoration-color 0.2s;
	}

	.services-note a:hover {
		text-decoration-color: var(--forest-light);
	}

	@media (max-width: 768px) {
		.tabs {
			border-radius: var(--radius-lg);
		}
		.tab {
			border-radius: var(--radius-md);
		}
	}
</style>
