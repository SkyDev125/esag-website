<script lang="ts">
	import type { Review } from '$lib/data/reviews.js';
	import { t } from '$lib/i18n.svelte';

	let { reviews }: { reviews: Review[] } = $props();

	let activeIdx = $state(0);
	let isPaused = $state(false);
	let pauseTimeout: ReturnType<typeof setTimeout>;

	function nextReview() {
		activeIdx = (activeIdx + 1) % reviews.length;
	}

	function handleInteraction(newIdx: number) {
		activeIdx = newIdx;
		isPaused = true;
		clearTimeout(pauseTimeout);
		pauseTimeout = setTimeout(() => {
			isPaused = false;
		}, 10000);
	}

	$effect(() => {
		if (isPaused) return;
		const interval = setInterval(nextReview, 6000);
		return () => clearInterval(interval);
	});

	function initials(name: string) {
		return name
			.split(' ')
			.slice(0, 2)
			.map((w) => w[0])
			.join('')
			.toUpperCase();
	}

	function formatDate(dateStr: string) {
		try {
			return new Intl.DateTimeFormat('pt-PT', { month: 'long', year: 'numeric' }).format(
				new Date(dateStr)
			);
		} catch {
			return '';
		}
	}

	function handleAvatarError(e: Event) {
		const img = e.currentTarget as HTMLImageElement;
		img.style.display = 'none';
		if (img.nextElementSibling) {
			(img.nextElementSibling as HTMLElement).style.display = 'grid';
		}
	}

	let startX = $state(0);
	let isDragging = $state(false);

	function handlePointerDown(e: PointerEvent) {
		startX = e.clientX;
		isDragging = true;
		isPaused = true;
		clearTimeout(pauseTimeout);
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) return;
		const deltaX = e.clientX - startX;

		if (deltaX < -50) {
			handleInteraction((activeIdx + 1) % reviews.length);
			isDragging = false;
		} else if (deltaX > 50) {
			handleInteraction((activeIdx - 1 + reviews.length) % reviews.length);
			isDragging = false;
		}
	}

	function handlePointerEnd() {
		if (isDragging) {
			isDragging = false;
			pauseTimeout = setTimeout(() => {
				isPaused = false;
			}, 10000);
		}
	}

	function getOffset(i: number) {
		let diff = i - activeIdx;
		const half = reviews.length / 2;
		if (diff > half) diff -= reviews.length;
		else if (diff < -half) diff += reviews.length;
		return diff;
	}
</script>

<section class="reviews-section section" id="avaliações">
	<div class="wrapper">
		<!-- Header -->
		<div class="reviews-header">
			<p class="section-label reveal">{t('reviews.label')}</p>
			<h2 class="section-title reveal reveal-delay-1">{t('reviews.title')}</h2>
			<p class="section-subtitle reveal reveal-delay-2" style="margin-inline: auto;">
				{t('reviews.subtitle')}
			</p>
		</div>

		<div class="carousel reveal reveal-delay-2">
			<div
				class="carousel-track"
				role="region"
				aria-roledescription="carousel"
				onpointerdown={handlePointerDown}
				onpointermove={handlePointerMove}
				onpointerup={handlePointerEnd}
				onpointerleave={handlePointerEnd}
				onpointercancel={handlePointerEnd}
			>
				{#each reviews as review, i}
					<article
						class="review-card"
						aria-hidden={i !== activeIdx}
						style="
							transform: translateX({getOffset(i) * 105}%); 
							opacity: {i === activeIdx ? 1 : 0}; 
							pointer-events: {i === activeIdx ? 'auto' : 'none'};
							z-index: {i === activeIdx ? 2 : 1};
						"
					>
						<!-- Stars -->
						<div class="review-stars" aria-label="{review.rating} de 5 estrelas">
							{#each Array(5) as _, s}
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill={s < review.rating ? 'var(--gold)' : 'var(--cream-dark)'}
									stroke={s < review.rating ? 'var(--gold)' : 'var(--cream-dark)'}
									stroke-width="1.5"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									/>
								</svg>
							{/each}
						</div>

						<!-- Quote -->
						<blockquote class="review-text">
							<p>"{review.text}"</p>
						</blockquote>

						<!-- Author -->
						<div class="review-author">
							{#if review.avatar && review.source === 'google'}
								<img
									src={review.avatar}
									alt={review.author}
									class="author-avatar"
									loading="lazy"
									onerror={handleAvatarError}
								/>
								<div class="author-initials" style="display: none;" aria-hidden="true">
									{initials(review.author)}
								</div>
							{:else}
								<div class="author-initials" aria-hidden="true">{initials(review.author)}</div>
							{/if}
							<div>
								<p class="author-name">{review.author}</p>
								<p class="author-meta">{formatDate(review.date)}</p>
							</div>
							{#if review.source === 'google'}
								<div class="google-badge" title="Avaliação Google">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
										<path
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
											fill="#4285F4"
										/>
										<path
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
											fill="#34A853"
										/>
										<path
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
											fill="#FBBC05"
										/>
										<path
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
											fill="#EA4335"
										/>
									</svg>
								</div>
							{/if}
						</div>
					</article>
				{/each}
			</div>

			<!-- Dots -->
			<div class="carousel-dots" role="tablist" aria-label="Navegar avaliações">
				{#each reviews as _, i}
					<button
						role="tab"
						class="dot"
						class:active={i === activeIdx}
						aria-label="Avaliação {i + 1}"
						aria-selected={i === activeIdx}
						onclick={() => handleInteraction(i)}
					></button>
				{/each}
			</div>

			<!-- Prev / Next -->
			<div class="carousel-nav">
				<button
					class="nav-btn"
					aria-label="Anterior"
					onclick={() => handleInteraction((activeIdx - 1 + reviews.length) % reviews.length)}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>
				<button
					class="nav-btn"
					aria-label="Próxima"
					onclick={() => handleInteraction((activeIdx + 1) % reviews.length)}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Leave review CTA -->
		<div class="leave-review reveal">
			<p>{t('reviews.leaveReview')}</p>
			<a
				href="https://search.google.com/local/writereview?placeid=ChIJk-rEK2EzGQ0RMCaXvfwJHiE"
				target="_blank"
				rel="noopener"
				class="btn btn-outline"
			>
				{t('reviews.leaveReviewBtn')}
			</a>
		</div>
	</div>
</section>

<style>
	.reviews-section {
		background: linear-gradient(160deg, var(--cream) 0%, var(--cream-dark) 100%);
		overflow: hidden;
	}

	.reviews-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	/* Carousel */
	.carousel {
		max-width: 700px;
		margin-inline: auto;
		position: relative;
	}

	.carousel-track {
		display: grid;
		align-items: start;
		touch-action: pan-y;
		user-select: none;
		-webkit-user-select: none;
		cursor: grab;
	}

	.carousel-track:active {
		cursor: grabbing;
	}

	.review-card {
		grid-area: 1 / 1;
		background: var(--white);
		border-radius: var(--radius-lg);
		padding: 2rem;
		box-shadow: var(--shadow-hover);
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition:
			transform 0.6s cubic-bezier(0.25, 1, 0.5, 1),
			opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.review-stars {
		display: flex;
		gap: 0.2rem;
	}

	.review-text {
		font-family: var(--font-serif);
		font-size: 1.0625rem;
		color: var(--text-dark);
		line-height: 1.7;
		font-style: italic;
	}

	.review-author {
		display: flex;
		align-items: center;
		gap: 0.875rem;
	}

	.author-avatar {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
		color: transparent;
	}

	.author-initials {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--forest-light), var(--forest));
		color: var(--white);
		display: grid;
		place-items: center;
		font-size: 0.875rem;
		font-weight: 600;
		flex-shrink: 0;
	}

	.author-name {
		font-weight: 600;
		font-size: 0.9375rem;
		color: var(--forest);
	}

	.author-meta {
		font-size: 0.8rem;
		color: var(--text-light);
		margin-top: 0.1rem;
		text-transform: capitalize;
	}

	.google-badge {
		margin-left: auto;
		background: var(--cream);
		border-radius: var(--radius-sm);
		padding: 0.375rem;
		display: grid;
		place-items: center;
	}

	/* Dots */
	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 2.5rem;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(30, 58, 15, 0.2);
		border: none;
		cursor: pointer;
		transition:
			background 0.25s,
			transform 0.25s;
	}

	.dot.active {
		background: var(--forest);
		transform: scale(1.3);
	}

	/* Nav buttons */
	.carousel-nav {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	.nav-btn {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1.5px solid rgba(30, 58, 15, 0.2);
		background: var(--white);
		color: var(--forest);
		display: grid;
		place-items: center;
		cursor: pointer;
		transition:
			background 0.2s,
			border-color 0.2s,
			transform 0.2s;
	}

	.nav-btn:hover {
		background: var(--forest);
		color: var(--white);
		border-color: var(--forest);
		transform: scale(1.05);
	}

	/* Leave review */
	.leave-review {
		margin-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
		text-align: center;
		color: var(--text-mid);
		font-size: 0.9375rem;
	}
</style>
