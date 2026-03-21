<script lang="ts">
	import { services, CATEGORIES, type Category } from '$lib/data/services.js';
	import ServiceCard from './ServiceCard.svelte';

	let activeCategory: Category = $state('Todos');

	const filtered = $derived(
		activeCategory === 'Todos'
			? services
			: services.filter((s) => s.category === activeCategory)
	);
</script>

<section class="services-section section" id="serviços">
	<div class="wrapper">
		<!-- Header -->
		<div class="services-header">
			<p class="section-label reveal">Os nossos serviços</p>
			<h2 class="section-title reveal reveal-delay-1">Tudo o que precisa,<br />num só lugar</h2>
			<p class="section-subtitle reveal reveal-delay-2">
				{services.length} serviços disponíveis. Escolha a categoria e agende directamente na Fresha.
			</p>
		</div>

		<!-- Category tabs -->
		<div class="tabs reveal reveal-delay-2" role="tablist" aria-label="Categorias de serviços">
			{#each CATEGORIES as cat}
				<button
					role="tab"
					class="tab"
					class:active={activeCategory === cat}
					aria-selected={activeCategory === cat}
					onclick={() => (activeCategory = cat)}
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Grid -->
		<div class="services-grid" role="tabpanel">
			{#each filtered as service (service.id)}
			<ServiceCard {service} />
		{/each}
		</div>

		<p class="services-note reveal">
			Preços e disponibilidade actualizados em
			<a
				href="https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd"
				target="_blank"
				rel="noopener"
			>Fresha</a>.
		</p>
	</div>
</section>

<style>
	.services-section {
		background: var(--white);
	}

	.services-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.services-header .section-subtitle {
		margin-inline: auto;
	}

	/* Tabs */
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		margin-bottom: 2.5rem;
	}

	.tab {
		padding: 0.5rem 1.125rem;
		border-radius: var(--radius-xl);
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		border: 1.5px solid rgba(30, 58, 15, 0.15);
		background: transparent;
		color: var(--text-mid);
		transition:
			background 0.2s,
			color 0.2s,
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.tab:hover {
		border-color: var(--forest-light);
		color: var(--forest);
	}

	.tab.active {
		background: var(--forest);
		color: var(--white);
		border-color: var(--forest);
		box-shadow: 0 4px 12px rgba(30, 58, 15, 0.25);
	}

	/* Grid */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
		gap: 1.25rem;
		margin-bottom: 2rem;
	}

	.services-note {
		text-align: center;
		font-size: 0.8125rem;
		color: var(--text-light);
	}

	.services-note a {
		color: var(--forest-light);
		font-weight: 500;
	}
</style>
