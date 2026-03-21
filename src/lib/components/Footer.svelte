<script lang="ts">
	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd';

	const hours = [
		{ day: 'Segunda-feira', time: 'Encerrado' },
		{ day: 'Terça-feira', time: '11:00 – 20:00' },
		{ day: 'Quarta-feira', time: '11:00 – 20:00' },
		{ day: 'Quinta-feira', time: '11:00 – 20:00' },
		{ day: 'Sexta-feira', time: '11:00 – 20:00' },
		{ day: 'Sábado', time: 'Encerrado' },
		{ day: 'Domingo', time: 'Encerrado' }
	];

	const today = new Date().getDay(); // 0=Sun, 1=Mon...
	// Map JS day (0-6) to our hours array index
	const dayMap: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
	const todayIdx = dayMap[today];
</script>

<footer class="footer" id="contacto">
	<div class="wrapper footer-grid">
		<!-- Brand -->
		<div class="footer-brand">
			<a href="/" class="footer-logo">
				<img src="/favicon.png" alt="Logo" class="logo-img" />
				<div>
					<span class="logo-name">Alexandra Gonçalves</span>
					<span class="logo-sub">Estética &amp; Saúde</span>
				</div>
			</a>
			<p class="footer-desc">
				Centro de estética profissional em Lisboa. Cuidamos de si com dedicação e qualidade.
			</p>
			<a href={BOOKING_URL} class="btn btn-gold footer-cta" target="_blank" rel="noopener">
				Agendar Agora
			</a>
		</div>

		<!-- Hours -->
		<div class="footer-col">
			<h4 class="footer-heading">Horário</h4>
			<ul class="hours-list">
				{#each hours as entry, i}
					<li class="hours-item" class:today={i === todayIdx} class:closed={entry.time === 'Encerrado'}>
						<span class="hours-day">{entry.day}</span>
						<span class="hours-time">{entry.time}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Contact & Location -->
		<div class="footer-col">
			<h4 class="footer-heading">Localização</h4>
			<address class="footer-address">
				<p>Av. Duque de Loulé 103, Loja 5</p>
				<p>1050-045 Lisboa, Portugal</p>
				<p class="addr-area">Marquês de Pombal · Coração de Jesus</p>
			</address>

			<div class="footer-links">
				<a
					href="https://www.google.com/maps/search/Estética+e+Saúde+Alexandra+Gonçalves,+Avenida+Duque+de+Loulé+103"
					target="_blank"
					rel="noopener"
					class="footer-link"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
					</svg>
					Ver no Google Maps
				</a>
				<a href={BOOKING_URL} target="_blank" rel="noopener" class="footer-link">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
					</svg>
					Marcações na Fresha
				</a>
			</div>

			<!-- Map embed -->
			<div class="map-embed">
				<iframe
					title="Localização no mapa"
					loading="lazy"
					allowfullscreen
					referrerpolicy="no-referrer-when-downgrade"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDee2Hkam9BY0ApUkOIu8SnwVyhab3K53E&q=place_id:ChIJk-rEK2EzGQ0RMCaXvfwJHiE&zoom=16"
				></iframe>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="wrapper footer-bottom-inner">
			<p>&copy; {new Date().getFullYear()} Estética e Saúde Alexandra Gonçalves · Lisboa</p>
			<p class="footer-accessibility">
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
				</svg>
				Acessível a cadeiras de rodas · Próximo de transportes públicos
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--forest);
		color: rgba(255, 255, 255, 0.85);
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr 1.2fr;
		gap: 4rem;
		padding-block: 4rem;
	}

	/* Brand col */
	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
	}

	.logo-img {
		height: 2.5rem;
		width: auto;
		object-fit: contain;
	}

	.logo-name {
		display: block;
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		font-weight: 600;
		color: var(--white);
		line-height: 1.2;
	}

	.logo-sub {
		display: block;
		font-size: 0.6875rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.footer-desc {
		font-size: 0.9rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.6);
	}

	.footer-cta {
		width: fit-content;
	}

	/* Generic col */
	.footer-col {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-heading {
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		color: var(--white);
		font-weight: 600;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 0.75rem;
		margin-bottom: 0.25rem;
	}

	/* Hours */
	.hours-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.hours-item {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		padding: 0.3rem 0;
	}

	.hours-item.today {
		color: var(--gold-light);
		font-weight: 600;
	}

	.hours-item.closed .hours-time {
		color: rgba(255, 255, 255, 0.35);
	}

	.hours-day {
		color: inherit;
	}

	.hours-time {
		color: rgba(255, 255, 255, 0.65);
	}

	.hours-item.today .hours-time {
		color: var(--gold-light);
	}

	/* Address */
	.footer-address {
		font-style: normal;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.addr-area {
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.45);
		margin-top: 0.25rem;
	}

	/* Links */
	.footer-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--gold-light);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-link:hover {
		color: var(--gold);
	}

	/* Map */
	.map-embed {
		margin-top: 0.5rem;
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.map-embed iframe {
		width: 100%;
		height: 180px;
		border: 0;
		display: block;
	}

	/* Bottom bar */
	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding-block: 1.25rem;
	}

	.footer-bottom-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.footer-accessibility {
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	@media (max-width: 1024px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.footer-bottom-inner {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
