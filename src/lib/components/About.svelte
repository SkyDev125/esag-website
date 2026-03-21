<script lang="ts">
	import { t } from '$lib/i18n.svelte';
	import { asset } from '$app/paths';

	const attributes = $derived([
		{ icon: '👩', label: t('about.attr1') },
		{ icon: '🏳️‍🌈', label: t('about.attr2') },
		{ icon: '♻️', label: t('about.attr3') },
		{ icon: '🐾', label: t('about.attr4') },
		{ icon: '👶', label: t('about.attr5') },
		{ icon: '♿', label: t('about.attr6') }
	]);
</script>

<section class="about section" id="sobre">
	<div class="wrapper about-grid">
		<!-- Visual side -->
		<div class="about-visual reveal">
			<div class="portrait-frame">
				<img src={asset('/mom.webp')} alt="Alexandra Gonçalves - Esteticista" class="portrait-photo" />
				<div class="portrait-badge">
					<span class="badge-icon">✦</span>
					<span>{t('about.badge')}</span>
				</div>
			</div>
		</div>

		<!-- Content side -->
		<div class="about-content">
			<p class="section-label reveal">{t('about.label')}</p>
			<h2 class="section-title reveal reveal-delay-1">
				{t('about.title1')}<br />{t('about.title2')}
			</h2>
			<p class="section-subtitle reveal reveal-delay-2">
				{t('about.subtitle')}
			</p>
			<p class="about-text reveal reveal-delay-2">
				{t('about.text')}
			</p>

			<!-- Brand attributes -->
			<div class="attributes reveal reveal-delay-3">
				{#each attributes as attr}
					<div class="attribute-chip">
						<span class="attr-icon">{attr.icon}</span>
						<span>{attr.label}</span>
					</div>
				{/each}
			</div>

			<!-- Location -->
			<div class="location-card reveal reveal-delay-4">
				<div class="location-icon">
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
							cx="12"
							cy="10"
							r="3"
						/>
					</svg>
				</div>
				<div>
					<p class="location-addr">Av. Duque de Loulé 103, Loja 5</p>
					<p class="location-sub">1050-045 Lisboa · {t('about.locationSub')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1.4fr;
		gap: 5rem;
		align-items: center;
	}

	/* Visual */
	.about-visual {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.portrait-frame {
		position: relative;
	}

	.portrait-photo {
		display: block;
		width: 320px;
		height: 400px;
		border-radius: var(--radius-lg);
		object-fit: cover;
		object-position: center;
		box-shadow: var(--shadow-hover);
		background: linear-gradient(160deg, #c8e6a4 0%, #8cbf68 50%, #4a7c28 100%);
	}

	.portrait-badge {
		position: absolute;
		bottom: -1rem;
		right: -1.5rem;
		background: var(--white);
		border-radius: var(--radius-md);
		padding: 0.625rem 1rem;
		box-shadow: var(--shadow-card);
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--forest);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.badge-icon {
		color: var(--gold);
		font-size: 0.875rem;
	}

	/* Content */
	.about-content {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.about-text {
		color: var(--text-mid);
		font-size: 0.9375rem;
		line-height: 1.75;
	}

	/* Attributes */
	.attributes {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.attribute-chip {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		background: var(--white);
		border: 1px solid rgba(30, 58, 15, 0.1);
		border-radius: var(--radius-xl);
		padding: 0.375rem 0.875rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--forest);
		box-shadow: var(--shadow-card);
	}

	.attr-icon {
		font-size: 1rem;
	}

	/* Location */
	.location-card {
		display: flex;
		align-items: flex-start;
		gap: 0.875rem;
		background: rgba(201, 168, 76, 0.06);
		border: 1px solid rgba(201, 168, 76, 0.2);
		border-radius: var(--radius-md);
		padding: 1rem 1.25rem;
	}

	.location-icon {
		color: var(--gold);
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.location-addr {
		font-weight: 500;
		font-size: 0.9375rem;
		color: var(--forest);
	}

	.location-sub {
		font-size: 0.8125rem;
		color: var(--text-mid);
		margin-top: 0.2rem;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.portrait-photo {
			width: 260px;
			height: 320px;
			margin-inline: auto;
		}

		.portrait-badge {
			left: 50%;
			transform: translateX(-50%);
			right: auto;
		}

		.attributes {
			justify-content: center;
		}
	}
</style>
