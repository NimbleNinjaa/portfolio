<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let currentTime = $state('');

	onMount(() => {
		// Update clock every second
		const updateClock = () => {
			const now = new Date();
			const hours = String(now.getHours()).padStart(2, '0');
			const minutes = String(now.getMinutes()).padStart(2, '0');
			const seconds = String(now.getSeconds()).padStart(2, '0');
			currentTime = `${hours}:${minutes}:${seconds}`;
		};

		updateClock();
		const interval = setInterval(updateClock, 1000);

		return () => clearInterval(interval);
	});

	const roles = ['Web Designer', 'Software Designer', 'Full-Stack Developer'];
</script>

<!-- Hero Banner -->
<div class="section-hero-v1">
	<div class="overlay"></div>
	<div class="bg-video">
		<video muted={true} autoplay={true} loop={true} playsinline={true}>
			<source src="/assets/images/video/corridor.mp4" type="video/mp4">
		</video>
		<div class="video-overlay"></div>
		<div class="video-overlay-2"></div>
		<div class="video-overlay-2"></div>
	</div>
	<div class="content-wrap">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="col-left hero-name-block">
						<ul class="tf-list vertical text-caption-large fw-large hero-roles">
							{#each roles as role, i}
								<li in:fly={{ y: 20, duration: 600, delay: 150 + i * 100 }}>
									<span class="link">{role}</span>
								</li>
							{/each}
						</ul>
						<div class="davies-large">
							<div in:fly={{ y: 40, duration: 800, delay: 500 }}>
								HÄMID<span class="text-primary">_</span>
							</div>
						</div>
						<div class="top hero-status text-caption fw-medium d-flex align-items-center" in:fade={{ duration: 600, delay: 650 }}>
							<p class="title text-has-dot">
								<span class="br-dot"></span>
								AVAILABLE FOR WORK
							</p>
							<div class="d-flex flex-column align-items-start hero-status-clock">
								<span>© 2026</span>
								<span class="text-caption-normal">CUP <span class="clock">{currentTime}</span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="col-right hero-desc-block">
						<div class="bot">
							<p class="desc text-caption-large" in:fly={{ x: 20, duration: 600, delay: 750 }}>
								Let's create digital experiences that feel intuitive and meaningful.
								I blend UI/UX design with full-stack development to bring ideas to life.
							</p>
							<div in:fly={{ x: 20, duration: 600, delay: 850 }}>
								<a href="#contactScroll" class="tf-btn">
									START A PROJECT
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- /Hero Banner -->

<style>
	:global(.section-hero-v1 .hero-name-block) {
		justify-content: flex-end;
	}
	:global(.section-hero-v1 .hero-roles) {
		margin-bottom: 40px !important;
	}
	:global(.section-hero-v1 .hero-status) {
		margin-top: 24px;
		gap: 24px;
	}
	:global(.section-hero-v1 .hero-status-clock) {
		gap: 2px;
	}
	:global(.section-hero-v1 .hero-desc-block) {
		justify-content: flex-end;
	}
</style>
