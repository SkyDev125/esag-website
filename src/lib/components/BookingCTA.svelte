<script lang="ts">
	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd';
</script>

<section class="cta-section">
	<div class="cta-bg" aria-hidden="true">
		<div class="cta-blob"></div>
	</div>
	<div class="wrapper cta-inner">
		<div class="cta-content reveal">
			<p class="section-label" style="color: var(--gold);">Pronta para começar?</p>
			<h2 class="cta-title">Reserve hoje, sinta-se renovada amanhã.</h2>
			<p class="cta-sub">
				Marque a sua consulta online em segundos. Escolha o horário que lhe convém e deixe o
				resto connosco.
			</p>
		</div>

		<div class="cta-actions reveal reveal-delay-2">
			<a href={BOOKING_URL} target="_blank" rel="noopener" class="btn btn-gold cta-btn">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<rect x="3" y="4" width="18" height="18" rx="2"/>
					<line x1="16" y1="2" x2="16" y2="6"/>
					<line x1="8" y1="2" x2="8" y2="6"/>
					<line x1="3" y1="10" x2="21" y2="10"/>
				</svg>
				Agendar na Fresha
			</a>
			<div class="cta-highlights">
				<span>✓ Sem taxas de marcação</span>
				<span>✓ Confirmação imediata</span>
				<span>✓ Cancelamento fácil</span>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-section {
		position: relative;
		background: var(--forest);
		overflow: hidden;
		padding-block: 6rem;
		text-align: center;
	}

	.cta-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.cta-blob {
		position: absolute;
		width: 800px;
		height: 800px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(143, 198, 67, 0.15), transparent 70%);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.cta-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		position: relative;
	}

	.cta-content {
		max-width: 60ch;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section-label {
		margin-bottom: 1rem;
	}

	.cta-title {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 5vw, 3.5rem);
		color: var(--white);
		line-height: 1.1;
		margin-bottom: 1.25rem;
	}

	.cta-sub {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.125rem;
		line-height: 1.6;
		max-width: 50ch;
	}

	.cta-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
	}

	.cta-btn {
		font-size: 1.125rem;
		padding: 1rem 2.5rem;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		justify-content: center;
	}

	.cta-highlights {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
	}

	.cta-highlights span {
		font-size: 0.9375rem;
		color: rgba(255, 255, 255, 0.7);
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	@media (max-width: 768px) {
		.cta-section {
			padding-block: 4rem;
		}

		.cta-highlights {
			flex-direction: column;
			gap: 0.75rem;
			align-items: center;
		}

		.cta-btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
