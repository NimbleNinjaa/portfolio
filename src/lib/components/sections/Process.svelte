<!-- Process -->
<section class="section-process flat-spacing process-glow-section" id="processScroll">
	<div class="neon-lines" aria-hidden="true">
		<span class="neon-line neon-line-1"></span>
		<span class="neon-line neon-line-2"></span>
		<span class="neon-line neon-line-3"></span>
		<span class="neon-line neon-line-4"></span>
	</div>
	<div class="container">
		<div class="s-header">
			<h2 class="title text-display-2 letter-space--3 fw-semibold effectFade fadeUp">
				The Process
			</h2>
		</div>
		<div class="process-list">
			<div dir="ltr" class="swiper swiper-process">
				<div class="swiper-wrapper">
					<!-- item 1 -->
					<div class="swiper-slide effectFade fadeUp no-div">
						<div class="wg-process">
							<div class="bg-img">
								<img loading="lazy" width="509" height="509" src="/assets/images/item/bg-1.jpg" alt="">
							</div>
							<div class="content position-relative z-5">
								<div class="img-icon">
									<img loading="lazy" width="120" height="120" src="/assets/images/item/process-1.png" alt="Discovery step icon">
								</div>

								<div>
									<h5 class="title letter-space--2">
										<span class="link">
											Discover the Essence <br class="d-none d-sm-block">
											that drives your brand
										</span>
									</h5>
									<div class="br-line"></div>
									<div class="bot">
										<p class="desc text-body-3 letter-space--1 text-white-64">
											I begin by clarifying your goals, audience, and market fit. The insights set a clear
											direction and define what success means for you.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- item 2 -->
					<div class="swiper-slide effectFade fadeUp no-div">
						<div class="wg-process">
							<div class="bg-img">
								<img loading="lazy" width="509" height="509" src="/assets/images/item/bg-1.jpg" alt="">
							</div>
							<div class="content position-relative z-5">
								<div class="img-icon">
									<img loading="lazy" width="120" height="120" src="/assets/images/item/process-2.png" alt="Design step icon">
								</div>

								<div>
									<h5 class="title letter-space--2">
										<span class="link">
											Design Bold Ideas<br class="d-none d-sm-block">
											with clear intention
										</span>
									</h5>
									<div class="br-line"></div>
									<div class="bot">
										<p class="desc text-body-3 letter-space--1 text-white-64">
											I translate strategy into visual identity and page structure. Every element serves a
											purpose—clean, accessible, and ready for growth.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- item 3 -->
					<div class="swiper-slide effectFade fadeUp no-div">
						<div class="wg-process">
							<div class="bg-img">
								<img loading="lazy" width="509" height="509" src="/assets/images/item/bg-1.jpg" alt="">
							</div>
							<div class="content position-relative z-5">
								<div class="img-icon">
									<img loading="lazy" width="120" height="120" src="/assets/images/item/process-3.png" alt="Delivery step icon">
								</div>

								<div>
									<h5 class="title letter-space--2">
										<span class="link">
											Deliver with Speed <br class="d-none d-sm-block">
											and lasting impact
										</span>
									</h5>
									<div class="br-line"></div>
									<div class="bot">
										<p class="desc text-body-3 letter-space--1 text-white-64">
											I build and launch your site in Framer or Webflow, then hand over an easy editor. You stay
											in control, with fast performance and room to scale.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sw-dot-default tf-pag-nav justify-content-center d-xl-none"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.process-glow-section {
		position: relative;
		overflow: hidden;
	}
	.process-glow-section > .container {
		position: relative;
		z-index: 1;
	}
	.neon-lines {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}
	.neon-line {
		position: absolute;
		left: -10%;
		width: 120%;
		height: 2px;
		background: linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%);
		box-shadow:
			0 0 8px 1px var(--primary),
			0 0 24px 4px rgba(29, 185, 185, 0.6),
			0 0 60px 10px rgba(29, 185, 185, 0.25);
		opacity: 0.55;
		animation: neonPulse 6s ease-in-out infinite;
	}
	.neon-line-1 {
		top: 10%;
		transform: rotate(-6deg);
		animation-delay: 0s;
	}
	.neon-line-2 {
		top: 38%;
		transform: rotate(4deg);
		animation-delay: -1.5s;
	}
	.neon-line-3 {
		top: 66%;
		transform: rotate(-3deg);
		animation-delay: -3s;
	}
	.neon-line-4 {
		top: 90%;
		transform: rotate(7deg);
		animation-delay: -4.5s;
	}
	@keyframes neonPulse {
		0%, 100% {
			opacity: 0.3;
			filter: brightness(0.85);
		}
		50% {
			opacity: 0.85;
			filter: brightness(1.3);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.neon-line {
			animation: none;
			opacity: 0.5;
		}
	}
</style>
<!-- /Process -->
