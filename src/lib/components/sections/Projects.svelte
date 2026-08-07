<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		onOpenModal: (projectId: string) => void;
	}

	let { onOpenModal }: Props = $props();

	interface Project {
		id: string;
		image: string;
		imageAlt: string;
		title: string;
		desc: string;
		tags: string[];
	}

	const projects: Project[] = [
		{
			id: 'technology',
			image: '/assets/images/section/technologymain.png',
			imageAlt: 'Technology and Software project showcase',
			title: 'Technology & Software',
			desc: 'Innovative software solutions and cutting-edge technology projects that transform businesses and enhance user experiences through modern development practices.',
			tags: ['Web Applications', 'Mobile Development', 'Database Solutions', 'API Integration', 'SaaS Platforms']
		},
		{
			id: 'finance',
			image: '/assets/images/section/financial-main.png',
			imageAlt: 'Finance and Fintech project showcase',
			title: 'Finance & Fintech',
			desc: 'Financial technology solutions that revolutionize banking, payments, and investment platforms with secure, scalable, and user-friendly interfaces.',
			tags: ['Payment Systems', 'Banking Platforms', 'Investment Apps', 'Blockchain Solutions', 'Financial Analytics']
		},
		{
			id: 'edgevision',
			image: '/assets/images/section/Business-main-big.png',
			imageAlt: 'Edge Vision AI Posture Detection project showcase',
			title: 'Edge Vision – AI Posture Detection',
			desc: 'AI-powered desktop application developed during the Demola innovation program to help office workers and gamers improve their posture using computer vision and machine learning.',
			tags: ['Computer Vision', 'Machine Learning', 'Real-Time Detection', 'Desktop Application', 'Python & OpenCV']
		},
		{
			id: 'health',
			image: '/assets/images/section/healthcaremain1.png',
			imageAlt: 'Health & Wellness mobile app showcase',
			title: 'Health & Wellness',
			desc: 'Cross-platform healthcare mobile application built with Flutter, connecting patients and doctors through profile management, appointment booking, and real-time online consultations.',
			tags: ['Flutter Mobile App', 'Patient & Doctor Management', 'Online Consultation System', 'Real-Time Communication', 'Android & iOS']
		},
		{
			id: 'dexer',
			image: '/assets/images/section/maindexerbig.png',
			imageAlt: 'Dexer Decentralized Exchange mobile app showcase',
			title: 'Dexer (Decentralized Cryptocurrency Token Swap Platform)',
			desc: "Dexer is a Web3 decentralized exchange (DEX) application that enables users to securely swap cryptocurrency tokens directly through blockchain smart contracts without relying on a centralized intermediary. The platform combines a user-friendly Svelte frontend with Ethereum smart contracts developed using Foundry, providing a fast, transparent, and secure token trading experience.",
			tags: ['Smart Contract Development', 'Token Swap Mechanics', 'Wallet Integration', 'Foundry Testing & Deployment', 'Svelte Web3 Frontend']
		}
	];

	let currentIndex = $state(0);
	const current = $derived(projects[currentIndex]);

	function next() {
		currentIndex = (currentIndex + 1) % projects.length;
	}
	function prev() {
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	}
</script>

<!-- Projects -->
<section class="section-projects-custom overflow-hidden flat-spacing" id="projectsScroll">
	<div class="floating-lights">
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
	</div>

	<div class="container">
		<div class="s-header s-header-scroll">
			<h2 class="text-display-2 fw-semibold effectFade fadeUp">
				Projects
			</h2>
		</div>
	</div>
	<div class="container">
		<div class="wrap-control position-relative">
			{#key currentIndex}
				<div class="wg-service-2">
					<div class="main-image" in:fly={{ x: 500, duration: 750, easing: cubicOut }}>
						<div class="image">
							<img loading="lazy" width="424" height="530" src={current.image} alt={current.imageAlt}>
						</div>
					</div>
					<div class="center" in:fade={{ duration: 500, delay: 200 }}>
						<h5 class="title project-title-clamp">
							{current.title}
						</h5>
						<p class="desc project-desc-clamp">
							{current.desc}
						</p>
						<div class="br-line d-flex"></div>
						<ul class="tf-list vertical">
							{#each current.tags as tag}
								<li class="letter-space--1">
									<span class="text-primary">//</span> {tag}
								</li>
							{/each}
						</ul>
						<button onclick={() => onOpenModal(current.id)} class="tf-btn">
							SEE MORE
						</button>
					</div>
				</div>
			{/key}

			<div class="project-nav">
				<button type="button" class="project-nav-btn tf-btn-2" onclick={prev} aria-label="Previous project">
					<i class="icon icon-arrow-long-left"></i>
				</button>
				<div class="project-nav-center">
					<div class="project-nav-dots">
						{#each projects as project, i}
							<button
								type="button"
								class="project-nav-dot"
								class:active={i === currentIndex}
								onclick={() => (currentIndex = i)}
								aria-label="Go to {project.title}"
								aria-current={i === currentIndex}
							></button>
						{/each}
					</div>
					<span class="project-nav-count text-caption fw-medium">
						{String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
					</span>
				</div>
				<button type="button" class="project-nav-btn tf-btn-2" onclick={next} aria-label="Next project">
					<i class="icon icon-arrow-long-right"></i>
				</button>
			</div>
		</div>
	</div>
</section>
<!-- /Projects -->

<style>
	.section-projects-custom {
		position: relative;
	}
	.project-nav {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin-top: 60px;
	}
	.project-nav-btn {
		width: 56px;
		height: 56px;
		font-size: 20px;
		cursor: pointer;
		border: none;
		color: var(--white);
	}
	.project-nav-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
	.project-nav-dots {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.project-nav-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: none;
		padding: 0;
		background-color: var(--white-16);
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.project-nav-dot:hover {
		background-color: var(--white-64);
	}
	.project-nav-dot.active {
		background-color: var(--primary);
		width: 24px;
		border-radius: 4px;
	}
	:global(.section-projects-custom .main-image .image) {
		height: 530px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		overflow: hidden;
	}
	:global(.section-projects-custom .main-image .image img) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	@media (max-width: 1199px) {
		:global(.section-projects-custom .main-image .image) {
			height: 100%;
		}
	}
	.project-title-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		overflow: hidden;
		min-height: 80px;
	}
	.project-desc-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		overflow: hidden;
		min-height: calc(4 * 1.5em);
	}
	.project-nav-count {
		min-width: 72px;
		text-align: center;
		color: var(--white-64);
	}
</style>
