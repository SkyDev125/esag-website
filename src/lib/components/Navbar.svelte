<script lang="ts">
	import { i18n, t, setLanguage } from '$lib/i18n.svelte';
	import { resolve, asset } from '$app/paths';

	const BOOKING_URL =
		'https://www.fresha.com/a/estetica-e-saude-alexandra-goncalves-lisboa-avenida-duque-de-loule-103-avpvjjbd/booking';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const handler = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});

	const navLinks = $derived([
		{ href: '#sobre', label: t('nav.about') },
		{ href: '#serviços', label: t('nav.services') },
		{ href: '#avaliações', label: t('nav.reviews') },
		{ href: '#contacto', label: t('nav.contact') }
	]);

	function toggleLang() {
		setLanguage(i18n.locale === 'pt' ? 'en' : 'pt');
	}
</script>

<header class="navbar" class:scrolled>
	<div class="wrapper nav-inner">
		<!-- Logo -->
		<a href={resolve('/')} class="logo" aria-label="Início">
			<img src={asset('/favicon.png')} alt="Logo" class="logo-img" />
			<div class="logo-text">
				<span class="logo-name">Alexandra Gonçalves</span>
				<span class="logo-sub">Estética &amp; Saúde</span>
			</div>
		</a>

		<!-- Desktop nav -->
		<nav class="nav-links" aria-label="Navegação principal">
			{#each navLinks as link}
				<a href={link.href} class="nav-link">{link.label}</a>
			{/each}
		</nav>

		<!-- CTA + Mobile toggle -->
		<div class="nav-actions">
			<div class="lang-switcher" class:lang-en={i18n.locale === 'en'}>
				<div class="lang-active-bg"></div>
				<button 
					class="lang-btn" 
					class:active={i18n.locale === 'pt'} 
					onclick={() => setLanguage('pt')}
					aria-label="Português"
				>
					PT
				</button>
				<button 
					class="lang-btn" 
					class:active={i18n.locale === 'en'} 
					onclick={() => setLanguage('en')}
					aria-label="English"
				>
					EN
				</button>
			</div>

			<a href={BOOKING_URL} class="btn btn-primary nav-cta" target="_blank" rel="noopener">
				{t('nav.book')}
			</a>
			<button
				class="hamburger"
				aria-label="Menu"
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
				<span class:open={mobileOpen}></span>
			</button>
		</div>
	</div>

	<!-- Mobile drawer -->
	{#if mobileOpen}
		<div class="mobile-menu" role="dialog" aria-label="Menu móvel">
			<button class="mobile-lang" onclick={toggleLang}>
				{t('nav.changeLang')}: {i18n.locale === 'pt' ? 'PT' : 'EN'}
			</button>
			{#each navLinks as link}
				<a href={link.href} class="mobile-link" onclick={() => (mobileOpen = false)}>{link.label}</a
				>
			{/each}
			<a
				href={BOOKING_URL}
				class="btn btn-primary mobile-cta"
				target="_blank"
				rel="noopener"
				onclick={() => (mobileOpen = false)}
			>
				{t('nav.bookNow')}
			</a>
		</div>
	{/if}
</header>

<style>
	.navbar {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 100;
		padding: 1.25rem 0;
		transition:
			background 0.3s ease,
			box-shadow 0.3s ease,
			padding 0.3s ease;
	}

	.navbar.scrolled {
		background: rgba(250, 247, 242, 0.92);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
		padding: 0.75rem 0;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	/* Logo */
	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-img {
		height: 2.5rem;
		width: auto;
		object-fit: contain;
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.logo-name {
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 600;
		color: var(--forest);
	}

	.logo-sub {
		font-size: 0.6875rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--gold);
		font-weight: 500;
	}

	/* Nav links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		margin-left: auto;
	}

	.nav-link {
		padding: 0.4rem 0.875rem;
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--forest);
		text-decoration: none;
		border-radius: var(--radius-xl);
		transition:
			background 0.2s,
			color 0.2s;
	}

	.nav-link:hover {
		background: rgba(30, 58, 15, 0.08);
	}

	/* Actions */
	.nav-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.nav-cta {
		padding: 0.625rem 1.375rem;
		font-size: 0.875rem;
	}

	.lang-switcher {
		display: flex;
		background: rgba(30, 58, 15, 0.05);
		padding: 2px;
		border-radius: var(--radius-xl);
		border: 1px solid rgba(30, 58, 15, 0.1);
		position: relative;
		height: 2.25rem;
		width: 5.5rem;
		box-sizing: border-box;
	}

	.lang-btn {
		flex: 1;
		background: transparent;
		border: none;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--forest);
		cursor: pointer;
		position: relative;
		z-index: 2;
		transition: color 0.3s ease, opacity 0.3s ease;
		opacity: 0.5;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lang-btn.active {
		opacity: 1;
		color: var(--forest);
	}

	.lang-active-bg {
		position: absolute;
		top: 2px;
		left: 2px;
		width: calc(50% - 2px);
		height: calc(100% - 4px);
		background: var(--white);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		border-radius: var(--radius-lg);
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 1;
	}

	.lang-en .lang-active-bg {
		transform: translateX(100%);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.375rem;
	}

	.hamburger span {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--forest);
		border-radius: 2px;
		transition:
			transform 0.25s,
			opacity 0.25s;
	}

	.hamburger span.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}
	.hamburger span.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Mobile menu */
	.mobile-menu {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem 1.5rem 1.5rem;
		background: rgba(250, 247, 242, 0.97);
		backdrop-filter: blur(12px);
		border-top: 1px solid rgba(30, 58, 15, 0.08);
	}

	.mobile-link {
		padding: 0.75rem 0.5rem;
		font-size: 1.0625rem;
		font-weight: 500;
		color: var(--forest);
		text-decoration: none;
		border-bottom: 1px solid rgba(30, 58, 15, 0.06);
	}

	.mobile-lang {
		background: transparent;
		border: none;
		text-align: left;
		padding: 0.75rem 0.5rem;
		font-size: 1.0625rem;
		font-weight: 500;
		color: var(--gold);
		border-bottom: 1px solid rgba(30, 58, 15, 0.06);
		cursor: pointer;
	}

	.mobile-cta {
		margin-top: 0.75rem;
		text-align: center;
		justify-content: center;
	}

	@media (max-width: 850px) {
		.nav-links {
			display: none;
		}
		.nav-cta {
			display: none;
		}
		.nav-actions {
			margin-left: auto;
		}
		.hamburger {
			display: flex;
		}
	}

	@media (max-width: 420px) {
		.nav-links {
			display: none;
		}
		.nav-cta {
			display: none;
		}
		.nav-actions {
			margin-left: auto;
		}
		.hamburger {
			display: flex;
		}
		.lang-switcher {
			display: none;
		}
	}
</style>
