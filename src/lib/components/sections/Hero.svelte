<script lang="ts">
	import { onMount } from 'svelte';
	
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
					<div class="col-left">
						<ul class="tf-list vertical text-caption-large fw-large ">
							<li><a href="#" class="link effectFade fadeUp">Web-Disginer</a></li>
							<li><a href="#" class="link effectFade fadeUp">Softwere-Disginer</a></li>
							<li><a href="#" class="link effectFade fadeUp">Full-stack-developer</a></li>
						</ul>
						<div class="davies-large">
							<div class="effectFade fadeRotateX">
								HÄMID<span class="text-primary">_</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="col-right">
						<div class="top text-caption fw-medium d-flex justify-content-between align-items-center effectFade">
							<p class="title text-has-dot ">
								<span class="br-dot"></span>
								AVAILABLE FOR WORK
							</p>
							<div class="d-flex flex-column align-items-end">
								<span>© 2026</span>
								<span class="text-caption-normal">CUP <span class="clock">{currentTime}</span></span>
							</div>
						</div>
						<div class="bot">
							<p class="desc text-caption-large effectFade fadeRight view-visible">
								Let's create digital experiences that feel intuitive and meaningful. 
								I blend UI/UX design with full-stack development to bring ideas to life.
							</p>
							<div class="effectFade fadeRight view-visible">
								<a href="#contactScroll" class="tf-btn ">
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
