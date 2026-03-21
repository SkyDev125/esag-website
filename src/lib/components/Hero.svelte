<script lang="ts">
	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd';

	type Props = {
		rating?: number | null;
		ratingCount?: number | null;
	};

	let { rating, ratingCount }: Props = $props();
</script>

<section class="hero" id="inicio">
	<!-- Background decoration -->
	<div class="hero-bg" aria-hidden="true">
		<div class="blob blob-1"></div>
		<div class="blob blob-2"></div>
		<div class="blob blob-3"></div>
	</div>

	<div class="wrapper hero-inner">
		<!-- Text content -->
		<div class="hero-content">
			<div class="hero-badge reveal">
				<span class="badge-dot"></span>
				Lisboa · Marquês de Pombal
			</div>

			<h1 class="hero-title reveal reveal-delay-1">
				Sinta-se
				<span class="title-highlight">renovada</span>
				a cada visita
			</h1>

			<p class="hero-sub reveal reveal-delay-2">
				Centro de estética profissional em Lisboa. Massagens, faciais, manicure, pedicure e
				depilação — com o cuidado que merece.
			</p>

			<div class="hero-actions reveal reveal-delay-3">
				<a href={BOOKING_URL} class="btn btn-gold" target="_blank" rel="noopener">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
					Agendar Agora
				</a>
				<a href="#serviços" class="btn btn-outline">Ver Serviços</a>
			</div>

			{#if rating}
				<div class="hero-rating reveal reveal-delay-4">
					<div class="rating-stars">
						{#each Array(5) as _, i}
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill={i < Math.round(rating) ? 'var(--gold)' : 'none'}
								stroke="var(--gold)"
								stroke-width="2"
							>
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
							</svg>
						{/each}
					</div>
					<span class="rating-text"
						><strong>{rating.toFixed(1)}</strong> · {ratingCount} avaliações no Google</span
					>
				</div>
			{:else}
				<div class="hero-rating reveal reveal-delay-4">
					<div class="rating-stars">
						{#each Array(5) as _}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" stroke-width="2">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
							</svg>
						{/each}
					</div>
					<span class="rating-text">Excelente · Altamente recomendada</span>
				</div>
			{/if}
		</div>

		<!-- Visual / image side -->
		<div class="hero-visual reveal reveal-delay-2">
			<div class="hero-card">
				<img src="/store.avif" alt="Clínica de Estética e Saúde em Lisboa" class="card-image" />
				<div class="card-info">
					<div class="card-stat">
						<span class="stat-num">35+</span>
						<span class="stat-label">Serviços</span>
					</div>
					<div class="card-divider" aria-hidden="true"></div>
					<div class="card-stat">
						<span class="stat-num">5★</span>
						<span class="stat-label">Avaliação</span>
					</div>
					<div class="card-divider" aria-hidden="true"></div>
					<div class="card-stat">
						<span class="stat-num">100%</span>
						<span class="stat-label">Satisfação</span>
					</div>
				</div>
			</div>

			<!-- Floating pills -->
			<div class="pill pill-top" aria-hidden="true">
				<span>✦</span> Drenagem Linfática
			</div>
			<div class="pill pill-bottom" aria-hidden="true">
				<span>✦</span> Limpeza de Pele
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="scroll-hint" aria-hidden="true">
		<span>Descubra mais</span>
		<div class="scroll-arrow">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
			</svg>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: grid;
		place-items: center;
		overflow: hidden;
		padding-top: 7rem;
		padding-bottom: 6rem;
		background: linear-gradient(160deg, #faf7f2 0%, #f3ede0 50%, #eae6d8 100%);
	}

	/* Blobs */
	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		opacity: 0.25;
	}

	.blob-1 {
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, #4a7c28, transparent);
		top: -20%;
		right: -10%;
		animation: drift1 12s ease-in-out infinite alternate;
	}

	.blob-2 {
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, #c9a84c, transparent);
		bottom: 0;
		left: -10%;
		animation: drift2 9s ease-in-out infinite alternate;
	}

	.blob-3 {
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, #2d5016, transparent);
		top: 40%;
		left: 40%;
		animation: drift1 15s ease-in-out infinite alternate-reverse;
	}

	@keyframes drift1 {
		from { transform: translate(0, 0) scale(1); }
		to   { transform: translate(40px, 30px) scale(1.1); }
	}
	@keyframes drift2 {
		from { transform: translate(0, 0) scale(1); }
		to   { transform: translate(-30px, -20px) scale(1.08); }
	}

	/* Layout */
	.hero-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		width: 100%;
		padding-block: 3rem;
	}

	/* Content */
	.hero-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(201, 168, 76, 0.12);
		color: var(--forest);
		border: 1px solid rgba(201, 168, 76, 0.3);
		padding: 0.35rem 1rem;
		border-radius: var(--radius-xl);
		font-size: 0.8125rem;
		font-weight: 500;
		width: fit-content;
	}

	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--gold);
		flex-shrink: 0;
		animation: pulse-dot 2s ease-in-out infinite;
	}

	@keyframes pulse-dot {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(1.3); }
	}

	.hero-title {
		color: var(--forest);
	}

	.title-highlight {
		display: inline-block;
		background: linear-gradient(135deg, var(--gold), var(--gold-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-style: italic;
	}

	.hero-sub {
		font-size: 1.125rem;
		color: var(--text-mid);
		line-height: 1.75;
		max-width: 44ch;
	}

	.hero-actions {
		display: flex;
		gap: 0.875rem;
		flex-wrap: wrap;
	}

	.hero-rating {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.rating-stars {
		display: flex;
		gap: 0.2rem;
	}

	.rating-text {
		font-size: 0.875rem;
		color: var(--text-mid);
	}

	/* Visual Card */
	.hero-visual {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.hero-card {
		background: var(--white);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-hover);
		overflow: hidden;
		width: 100%;
		max-width: 540px;
	}

	.card-image {
		display: block;
		width: 100%;
		height: 300px;
		object-fit: cover;
		object-position: center;
		background: linear-gradient(135deg, #ddedc8 0%, #b8d89a 50%, #8cbf68 100%);
	}

	.card-info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 1.25rem;
	}

	.card-stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
	}

	.stat-num {
		font-family: var(--font-serif);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--forest);
		line-height: 1;
	}

	.stat-label {
		font-size: 0.75rem;
		color: var(--text-light);
		font-weight: 500;
	}

	.card-divider {
		width: 1px;
		height: 2.5rem;
		background: var(--cream-dark);
	}

	/* Floating pills */
	.pill {
		position: absolute;
		background: var(--white);
		border: 1px solid rgba(201, 168, 76, 0.2);
		box-shadow: var(--shadow-card);
		border-radius: var(--radius-xl);
		padding: 0.5rem 1rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--forest);
		display: flex;
		align-items: center;
		gap: 0.4rem;
		white-space: nowrap;
	}

	.pill span {
		color: var(--gold);
	}

	.pill-top {
		top: -1rem;
		left: -2rem;
		animation: float 4s ease-in-out infinite;
	}

	.pill-bottom {
		bottom: 6rem;
		right: -2.5rem;
		animation: float 4s ease-in-out infinite 1.5s;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}

	/* Scroll hint */
	.scroll-hint {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-light);
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.scroll-arrow {
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(6px); }
	}

	/* Responsive */
	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 3rem;
		}

		.hero-badge {
			margin-inline: auto;
		}

		.hero-sub {
			margin-inline: auto;
		}

		.hero-actions {
			justify-content: center;
		}

		.hero-rating {
			justify-content: center;
		}

		.pill-top {
			left: 0;
		}

		.pill-bottom {
			right: 0;
		}
	}

	@media (max-width: 480px) {
		.pill {
			display: none;
		}
	}
</style>
