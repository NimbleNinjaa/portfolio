<!-- Footer -->
<script lang="ts">
	import { onMount } from 'svelte';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		const chars = '0123456789';
		const fontSize = 16;
		let columns = 0;
		let drops: number[] = [];
		let width = 0;
		let height = 0;
		let nameCells: Array<[number, number]> = [];

		function buildNameCells() {
			const off = document.createElement('canvas');
			off.width = width;
			off.height = height;
			const octx = off.getContext('2d');
			if (!octx) return;
			const fontPx = Math.min(160, width / 5.2);
			octx.fillStyle = '#fff';
			octx.font = `900 ${fontPx}px Arial, sans-serif`;
			octx.textAlign = 'center';
			octx.textBaseline = 'middle';
			// Anchor near the bottom padding band, not the vertical center of the
			// whole (very tall) footer canvas.
			const textY = height - 170;
			octx.fillText('HAMID', width / 2, textY);
			const data = octx.getImageData(0, 0, width, height).data;

			nameCells = [];
			const rowStart = Math.max(0, Math.floor((textY - fontPx) / fontSize));
			const rowEnd = Math.min(Math.ceil(height / fontSize), Math.ceil((textY + fontPx) / fontSize));
			for (let col = 0; col < columns; col++) {
				for (let row = rowStart; row < rowEnd; row++) {
					const px = Math.min(width - 1, col * fontSize + fontSize / 2);
					const py = Math.min(height - 1, row * fontSize);
					if (data[(Math.round(py) * width + Math.round(px)) * 4 + 3] > 128) {
						nameCells.push([col, row]);
					}
				}
			}
		}

		function resize() {
			const rect = canvas.parentElement!.getBoundingClientRect();
			width = canvas.width = rect.width;
			height = canvas.height = rect.height;
			columns = Math.floor(width / fontSize);
			drops = Array(columns).fill(0);
			buildNameCells();
		}

		resize();
		window.addEventListener('resize', resize);

		let nameDigit = 1;
		let frameCount = 0;
		const framesPerCount = 16; // ~800ms at the 50ms draw interval, i.e. a slow count

		function draw() {
			if (!ctx) return;
			ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
			ctx.fillRect(0, 0, width, height);

			ctx.font = `${fontSize}px monospace`;

			ctx.fillStyle = 'rgba(29, 185, 185, 0.5)';
			for (let i = 0; i < drops.length; i++) {
				const char = chars[Math.floor(Math.random() * chars.length)];
				ctx.fillText(char, i * fontSize, drops[i] * fontSize);

				if (drops[i] * fontSize > height && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}

			// Redraw the name every frame so it stays legible instead of only
			// flickering whenever a falling column happens to pass through it.
			// The digit counts slowly from 1 to 9 instead of flickering randomly.
			frameCount++;
			if (frameCount >= framesPerCount) {
				frameCount = 0;
				nameDigit = (nameDigit % 9) + 1;
			}

			ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
			for (const [col, row] of nameCells) {
				ctx.fillText(String(nameDigit), col * fontSize, row * fontSize);
			}
		}

		let running = false;
		let intervalId: ReturnType<typeof setInterval> | undefined;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !running) {
					running = true;
					intervalId = setInterval(draw, 50);
				} else if (!entry.isIntersecting && running) {
					running = false;
					clearInterval(intervalId);
				}
			},
			{ threshold: 0 }
		);
		observer.observe(canvas);

		return () => {
			clearInterval(intervalId);
			window.removeEventListener('resize', resize);
			observer.disconnect();
		};
	});
</script>

<footer class="tf-footer">
	<canvas bind:this={canvas} class="footer-rain" aria-hidden="true"></canvas>
	<div class="container">
		<div class="br-line"></div>
	</div>
	<div class="footer-inner">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<p class="title text-has-dot text-caption fw-medium effectFade fadeUp">
						<span class="br-dot"></span>
						OPEN FOR NEW PROJECTS
					</p>
					<h3 class="h3 fw-medium footer-cta-heading effectFade fadeUp">
						Let's build something<br> worth talking about.
					</h3>
					<p class="text-body-1 text-white-64 footer-blurb effectFade fadeUp">
						Full-stack software engineer building web &amp; mobile apps, UI/UX, and Web3 projects.
					</p>
					<a href="mailto:hamidreza.yourdkhani1993@gmail.com" class="footer-email tf-link-icon link text-body-1 fw-medium effectFade fadeUp">
						hamidreza.yourdkhani1993@gmail.com
						<i class="icon icon-arrow-long-right"></i>
					</a>
					<ul class="footer-social-list effectFade fadeUp no-div">
						<li>
							<a href="https://github.com/NimbleNinjaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="footer-social-btn">
								<img src="/assets/images/brand/github.svg" alt="" width="18" height="18">
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/kuva_fi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="footer-social-btn">
								<img src="/assets/images/brand/instagram.svg" alt="" width="18" height="18">
							</a>
						</li>
					</ul>
				</div>
				<div class="col-6 col-sm-4 col-md-3 offset-md-1 footer-menu-col">
					<ul class="footer-menu-list mb-sm-0 effectFade fadeUp">
						<li><a href="/" class="link letter-space--2 h5">Home</a></li>
						<li><a href="#workScroll" class="link letter-space--2 h5">Selected Work</a></li>
						<li><a href="#projectsScroll" class="link letter-space--2 h5">Projects</a></li>
						<li><a href="#processScroll" class="link letter-space--2 h5">Process</a></li>
						<li><a href="#aboutScroll" class="link letter-space--2 h5">About</a></li>
					</ul>
				</div>
				<div class="col-6 col-sm-4 col-md-3 footer-menu-col">
					<ul class="footer-menu-list mb-0 effectFade fadeUp">
						<li><a href="#techStackScroll" class="link letter-space--2 h5">Tech Stack</a></li>
						<li><a href="#statsScroll" class="link letter-space--2 h5">Stats</a></li>
						<li><a href="#faqScroll" class="link letter-space--2 h5">FAQ</a></li>
						<li><a href="#contactScroll" class="link letter-space--2 h5">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="footer-bottom">
		<div class="container">
			<div class="bottom">
				<p class="text-nocopy text-caption fw-medium letter-space--1">
					© {new Date().getFullYear()} HAMID'S PERSONAL PORTFOLIO
				</p>
				<button type="button" class="action-go-top tf-link-icon link text-caption fw-medium letter-space--1" onclick={scrollToTop}>
					BACK TO TOP
					<i class="icon icon-arrow-long-right"></i>
				</button>
			</div>
		</div>
	</div>
</footer>
<!-- /Footer -->

<style>
	.tf-footer {
		position: relative;
		overflow: hidden;
	}
	.footer-rain {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}
	.tf-footer > .container,
	.tf-footer > .footer-inner,
	.tf-footer > .footer-bottom {
		position: relative;
		z-index: 1;
	}
	.footer-bottom {
		padding-top: 240px;
	}
	.footer-cta-heading {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	.footer-menu-col {
		margin-top: 44px;
	}
	.footer-blurb {
		max-width: 320px;
		margin-bottom: 24px;
	}
	.footer-email {
		margin-bottom: 32px;
	}
	.footer-email:hover {
		color: var(--primary);
	}
	.footer-social-list {
		display: flex;
		gap: 12px;
	}
	.footer-social-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid var(--white-16);
		transition: all 0.3s ease;
	}
	.footer-social-btn:hover {
		border-color: var(--primary);
		background-color: var(--primary);
		transform: translateY(-2px);
	}
	.action-go-top {
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
