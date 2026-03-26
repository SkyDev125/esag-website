<script lang="ts">
	import { t } from '$lib/i18n.svelte';
	import { untrack } from 'svelte';
	import { browser } from '$app/environment';

	let isOpen = $state(false);

	const links = [
		{
			id: 'whatsapp',
			href: 'https://wa.me/351964846982',
			label: 'WhatsApp',
			icon: 'whatsapp',
			color: '#25D366'
		},
		{
			id: 'phone',
			href: 'tel:+351964846982',
			label: t('contact.phone'),
			icon: 'phone',
			color: '#8FC643'
		},
		{
			id: 'instagram',
			href: 'https://www.instagram.com/alexandragoncalveses/',
			label: 'Instagram',
			icon: 'instagram',
			color: '#E4405F'
		},
		{
			id: 'facebook',
			href: 'https://www.facebook.com/esteticaesaudealexandragoncalves',
			label: 'Facebook',
			icon: 'facebook',
			color: '#1877F2'
		},
		{
			id: 'tiktok',
			href: 'https://www.tiktok.com/@estetica_alexa_goncalves',
			label: 'TikTok',
			icon: 'tiktok',
			color: '#000000'
		}
	];

	function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen && browser) {
			document.body.style.overflow = window.innerWidth < 640 ? 'hidden' : '';
		} else if (browser) {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		isOpen = false;
		if (browser) document.body.style.overflow = '';
	}
</script>

<div class="floating-contact" class:is-open={isOpen}>
	<!-- Backdrop for mobile -->
	{#if isOpen}
		<button class="backdrop" onclick={closeMenu} aria-label="Fechar"></button>
	{/if}

	<!-- Links Menu -->
	<div class="contact-menu" role="menu">
		<div class="menu-header">
			<span class="menu-title">Alexandra Gonçalves</span>
			<span class="menu-subtitle">Estética & Saúde</span>
		</div>
		
		<div class="menu-links">
			{#each links as link}
				<a
					href={link.href}
					target={link.id !== 'phone' ? '_blank' : undefined}
					rel={link.id !== 'phone' ? 'noopener' : undefined}
					class="menu-link link-{link.id}"
					onclick={closeMenu}
				>
					<span class="link-icon">
						{#if link.icon === 'whatsapp'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
								<path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.843L.057 23.571a.5.5 0 0 0 .611.611l5.729-1.474A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.367l-.358-.214-3.713.955.976-3.584-.234-.369A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
							</svg>
						{:else if link.icon === 'phone'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
						{:else if link.icon === 'instagram'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.162 3.547.645 2.268 1.924.99 3.202.507 4.852.417 6.707.014 7.987 0 8.396 0 12s.014 4.013.072 5.293c.09 1.855.573 3.505 1.852 4.784 1.279 1.279 2.929 1.762 4.784 1.852C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.09 3.505-.573 4.784-1.852 1.279-1.279 1.762-2.929 1.852-4.784.058-1.28.072-1.689.072-5.293s-.014-4.013-.072-5.293c-.09-1.855-.573-3.505-1.852-4.784C20.453.645 18.803.162 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
							</svg>
						{:else if link.icon === 'facebook'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.024 4.388 11.017 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.025 1.79-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.09 24 18.097 24 12.073z"/>
							</svg>
						{:else if link.icon === 'tiktok'}
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
							</svg>
						{/if}
					</span>
					<span class="link-label">{link.label}</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Toggle Button -->
	<button
		class="toggle-btn"
		onclick={toggleMenu}
		aria-label="Contactos"
		aria-expanded={isOpen}
	>
		<div class="icon-container">
			{#if isOpen}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{:else}
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
					<path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.843L.057 23.571a.5.5 0 0 0 .611.611l5.729-1.474A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.003-1.367l-.358-.214-3.713.955.976-3.584-.234-.369A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
				</svg>
			{/if}
		</div>
	</button>
</div>

<style>
	.floating-contact {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1rem;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(4px);
		border: none;
		cursor: pointer;
		display: none;
	}

	@media (max-width: 640px) {
		.is-open .backdrop {
			display: block;
		}
	}

	.toggle-btn {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--gold), var(--gold-light));
		color: var(--forest);
		border: none;
		cursor: pointer;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
		z-index: 1002;
	}

	.toggle-btn:hover {
		transform: scale(1.1);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.contact-menu {
		position: absolute;
		bottom: 4.5rem;
		right: 0;
		width: 280px;
		background: var(--white);
		border-radius: var(--radius-lg);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		opacity: 0;
		transform: translateY(20px) scale(0.95);
		pointer-events: none;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		z-index: 1001;
	}

	.is-open .contact-menu {
		opacity: 1;
		transform: translateY(0) scale(1);
		pointer-events: auto;
	}

	.menu-header {
		padding: 1.5rem;
		background: var(--forest);
		color: var(--white);
		text-align: center;
	}

	.menu-title {
		display: block;
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 600;
	}

	.menu-subtitle {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--gold);
	}

	.menu-links {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.menu-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.875rem 1rem;
		border-radius: var(--radius-md);
		text-decoration: none;
		color: var(--text-dark);
		font-weight: 500;
		transition: background 0.2s, transform 0.2s;
		border: 1px solid rgba(0,0,0,0.05);
	}

	.menu-link:hover {
		background: var(--cream);
		transform: translateX(4px);
	}

	.link-icon {
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--cream-dark);
		color: var(--forest);
		transition: all 0.2s;
	}

	.menu-link:hover .link-icon {
		background: var(--forest);
		color: var(--white);
	}

	/* Specific colors on hover */
	.menu-link.link-whatsapp:hover .link-icon { background: #25D366; }
	.menu-link.link-phone:hover .link-icon { background: var(--gold); }
	.menu-link.link-instagram:hover .link-icon { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
	.menu-link.link-facebook:hover .link-icon { background: #1877F2; }
	.menu-link.link-tiktok:hover .link-icon { background: #000; }

	@media (max-width: 640px) {
		.contact-menu {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			border-radius: var(--radius-lg) var(--radius-lg) 0 0;
			transform: translateY(100%);
		}

		.is-open .contact-menu {
			transform: translateY(0);
		}

		.menu-links {
			padding: 1.5rem;
			gap: 1rem;
			max-height: 70vh;
			overflow-y: auto;
		}

		.menu-link {
			padding: 1.25rem;
			font-size: 1.125rem;
		}

		.toggle-btn {
			box-shadow: 0 4px 15px rgba(0,0,0,0.3);
		}
	}
</style>
