<script lang="ts">
	import { t } from '$lib/i18n.svelte';
	import { resolve, asset } from '$app/paths';

	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd/booking';

	const hours = $derived([
		{ day: t('footer.days.1'), time: t('footer.closed') },
		{ day: t('footer.days.2'), time: '11:00 – 20:00' },
		{ day: t('footer.days.3'), time: '11:00 – 20:00' },
		{ day: t('footer.days.4'), time: '11:00 – 20:00' },
		{ day: t('footer.days.5'), time: '11:00 – 20:00' },
		{ day: t('footer.days.6'), time: t('footer.closed') },
		{ day: t('footer.days.0'), time: t('footer.closed') }
	]);

	const today = new Date().getDay(); // 0=Sun, 1=Mon...
	const dayMap: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 };
	const todayIdx = dayMap[today];

	const socials = [
		{ id: 'instagram', icon: 'instagram', href: 'https://www.instagram.com/alexandragoncalveses/' },
		{ id: 'facebook', icon: 'facebook', href: 'https://www.facebook.com/esteticaesaudealexandragoncalves' },
		{ id: 'tiktok', icon: 'tiktok', href: 'https://www.tiktok.com/@estetica_alexa_goncalves' }
	];
</script>

<footer class="footer" id="contacto">
	<div class="wrapper footer-grid">
		<!-- Column 1: Brand + Contacts -->
		<div class="footer-brand">
			<a href={resolve('/')} class="footer-logo">
				<img src={asset('/favicon.png')} alt="Logo" class="logo-img" />
				<div>
					<span class="logo-name">Alexandra Gonçalves</span>
					<span class="logo-sub">Estética & Saúde</span>
				</div>
			</a>
			<p class="footer-desc">
				{t('footer.desc')}
			</p>
			<a href={BOOKING_URL} class="btn btn-gold footer-cta" target="_blank" rel="noopener">
				{t('nav.bookNow')}
			</a>

			<hr class="footer-divider" />

			<!-- New Linktree-style Contact Section -->
			<div class="footer-contacts">
				<div class="contact-group">
					<span class="group-label">{t('contact.heading')}:</span>
					<div class="contact-grid">
						<a href="tel:+351964846982" class="contact-link link-phone">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							<span>{t('contact.phone')}</span>
						</a>
						<a href="https://wa.me/351964846982" target="_blank" rel="noopener" class="contact-link link-whatsapp">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
								<path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.843L.057 23.571a.5.5 0 0 0 .611.611l5.729-1.474A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.367l-.358-.214-3.713.955.976-3.584-.234-.369A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
							</svg>
							<span>WhatsApp</span>
						</a>
					</div>
				</div>

				<div class="socials-group">
					<span class="group-label">{t('contact.socials')}:</span>
					<div class="social-icons">
						{#each socials as social}
							<a href={social.href} target="_blank" rel="noopener" class="social-icon icon-{social.id}" aria-label={social.id}>
								{#if social.icon === 'instagram'}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.162 3.547.645 2.268 1.924.99 3.202.507 4.852.417 6.707.014 7.987 0 8.396 0 12s.014 4.013.072 5.293c.09 1.855.573 3.505 1.852 4.784 1.279 1.279 2.929 1.762 4.784 1.852C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.09 3.505-.573 4.784-1.852 1.279-1.279 1.762-2.929 1.852-4.784.058-1.28.072-1.689.072-5.293s-.014-4.013-.072-5.293c-.09-1.855-.573-3.505-1.852-4.784C20.453.645 18.803.162 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
									</svg>
								{:else if social.icon === 'facebook'}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.024 4.388 11.017 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.025 1.79-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.09 24 18.097 24 12.073z"/>
									</svg>
								{:else}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
									</svg>
								{/if}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Column 2: Hours -->
		<div class="footer-col">
			<h4 class="footer-heading">{t('footer.hours')}</h4>
			<ul class="hours-list">
				{#each hours as entry, i}
					<li
						class="hours-item"
						class:today={i === todayIdx}
						class:closed={entry.time === t('footer.closed')}
					>
						<span class="hours-day">{entry.day}</span>
						<span class="hours-time">{entry.time}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Column 3: Location -->
		<div class="footer-col">
			<h4 class="footer-heading">{t('footer.location')}</h4>
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
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
					</svg>
					{t('footer.linksMap')}
				</a>
				<a href={BOOKING_URL} target="_blank" rel="noopener" class="footer-link">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
					</svg>
					{t('footer.linksBook')}
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
					<circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
				</svg>
				{t('footer.accessWheelchair')} · {t('footer.accessTransport')}
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
		grid-template-columns: 1.4fr 1fr 1.2fr;
		gap: 3rem;
		padding-block: 3rem;
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
		margin-bottom: 0.25rem;
	}

	.footer-divider {
		border: 0;
		height: 1px;
		background: rgba(255, 255, 255, 0.1);
		margin-block: 0.15rem;
		width: 100%;
	}

	.footer-contacts {
		margin-top: 0.35rem;
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
	}

	.contact-group, .socials-group {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.group-label {
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: 600;
		color: var(--gold);
		opacity: 0.8;
	}

	.contact-link {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.65rem 0.75rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		color: var(--white);
		font-size: 0.8125rem;
		text-decoration: none;
		position: relative;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1;
	}

	.contact-link > * {
		position: relative;
		z-index: 2;
		transition: transform 0.3s ease;
	}

	/* Swoosh Element */
	.contact-link::after {
		content: '';
		position: absolute;
		top: 0;
		left: -150%;
		width: 120%;
		height: 100%;
		transform: skewX(-20deg);
		transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: -1;
	}

	.link-phone::after {
		background: linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.2) 50%, transparent 100%);
	}

	.link-whatsapp::after {
		background: linear-gradient(90deg, transparent 0%, rgba(37, 211, 102, 0.2) 50%, transparent 100%);
	}

	.contact-link:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
		box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.4);
	}

	.contact-link:hover::after {
		left: 150%;
	}

	.contact-link:hover > svg {
		transform: scale(1.1) rotate(-5deg);
	}

	.link-whatsapp:hover {
		border-color: rgba(37, 211, 102, 0.3);
	}

	.link-phone:hover {
		border-color: rgba(212, 175, 55, 0.3);
	}

	.contact-grid {
		display: flex;
		gap: 0.75rem;
		width: 100%;
	}

	.social-icons {
		display: flex;
		gap: 0.75rem;
	}

	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.7);
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		position: relative;
		overflow: hidden;
	}

	.social-icon:hover {
		transform: translateY(-3px) scale(1.1);
		color: var(--white);
		border-color: var(--white);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}

	.icon-instagram:hover { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%); }
	.icon-facebook:hover { background: #1877f2; }
	.icon-tiktok:hover { background: #000; }

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
		padding: 0.4rem 0;
	}

	.hours-item.today {
		color: var(--white);
		font-weight: 600;
		background: rgba(255, 255, 255, 0.15);
		padding-inline: 0.5rem;
		margin-inline: -0.5rem;
		border-radius: var(--radius-sm);
	}

	.hours-item.closed .hours-time {
		color: rgba(255, 255, 255, 0.35);
	}

	.hours-time {
		color: rgba(255, 255, 255, 0.65);
	}

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
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-link:hover {
		color: var(--gold);
	}

	.map-embed {
		margin-top: 0.5rem;
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.map-embed iframe {
		width: 100%;
		height: 150px;
		border: 0;
		display: block;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding-block: 1.5rem;
	}

	.footer-bottom-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.footer-accessibility {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	@media (max-width: 1024px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.footer-brand {
			align-items: center;
			text-align: center;
		}

		.footer-divider {
			width: 100%;
			margin-inline: auto;
		}

		.group-label {
			text-align: center;
			width: 100%;
		}

		.footer-contacts,
		.contact-group {
			width: 100%;
		}

		.contact-grid {
			flex-direction: column;
			gap: 0.65rem;
			width: 100%;
		}

		.contact-link {
			width: 100%;
		}

		.social-icons {
			justify-content: center;
		}

		.footer-bottom-inner {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
