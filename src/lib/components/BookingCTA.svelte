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
			<p class="section-label" style="color: var(--gold-light);">Pronta para começar?</p>
			<h2 class="cta-title">Reserve hoje,<br />sinta-se renovada amanhã.</h2>
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
		padding-block: 5rem;
	}

	.cta-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.cta-blob {
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%);
		right: -10%;
		top: -50%;
	}

	.cta-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
		flex-wrap: wrap;
		position: relative;
	}

	.cta-content {
		max-width: 48ch;
	}

	.cta-title {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--white);
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.cta-sub {
		color: rgba(255, 255, 255, 0.7);
		font-size: 1rem;
		line-height: 1.7;
	}

	.cta-actions {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
		flex-shrink: 0;
	}

	.cta-btn {
		font-size: 1.0625rem;
		padding: 1rem 2.25rem;
		white-space: nowrap;
	}

	.cta-highlights {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.cta-highlights span {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.65);
	}

	@media (max-width: 768px) {
		.cta-inner {
			flex-direction: column;
			text-align: center;
		}

		.cta-actions {
			align-items: center;
			width: 100%;
		}

		.cta-btn {
			width: 100%;
			justify-content: center;
		}

		.cta-highlights {
			align-items: center;
		}
	}
</style>
