<script lang="ts">
	interface Props {
		onOpenModal: (projectId: string) => void;
	}
	
	let { onOpenModal }: Props = $props();
</script>

<!-- Projects -->
<section class="section-service-2 section-projects-custom overflow-hidden flat-spacing" id="projectsScroll">
	<!-- Animated Floating Lights -->
	<div class="floating-lights">
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
		<div class="floating-light"></div>
	</div>
	<div class="bg-image-list">
		<div class="bg-image">
			<img loading="lazy" width="1440" height="938" src="/assets/images/section/bg-service-1.jpg" alt="">
			<div class="img-item">
				<img loading="lazy" width="1440" height="938" src="/assets/images/item/overlay.png" alt="">
			</div>
		</div>
		<div class="bg-image">
			<img loading="lazy" width="1440" height="938" src="/assets/images/section/bg-service-2.jpg" alt="">
			<div class="img-item">
				<img loading="lazy" width="1440" height="938" src="/assets/images/item/overlay.png" alt="">
			</div>
		</div>
		<div class="bg-image">
			<img loading="lazy" width="1440" height="938" src="/assets/images/section/bg-service-3.jpg" alt="">
			<div class="img-item">
				<img loading="lazy" width="1440" height="938" src="/assets/images/item/overlay.png" alt="">
			</div>
		</div>
		<div class="bg-image">
			<img loading="lazy" width="1440" height="938" src="/assets/images/section/bg-service-1.jpg" alt="">
			<div class="img-item">
				<img loading="lazy" width="1440" height="938" src="/assets/images/item/overlay.png" alt="">
			</div>
		</div>
		<div class="bg-image">
			<img loading="lazy" width="1440" height="938" src="/assets/images/section/bg-service-2.jpg" alt="">
			<div class="img-item">
				<img loading="lazy" width="1440" height="938" src="/assets/images/item/overlay.png" alt="">
			</div>
		</div>
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
			<!-- Project 1: Technology & Software -->
			<div class="wg-service-2">
				<div class="main-image">
					<div class="image">
						<img loading="lazy" width="424" height="530" src="/assets/images/section/technologymain.png" alt="Technology and Software project showcase">
					</div>
					<div class="action tf-btn-2 cs-pointer">
						<i class="icon icon-arrow-long-right"></i>
					</div>
				</div>
				<div class="center">
					<h5 class="title">
						Technology & Software
					</h5>
					<p class="desc">
						Innovative software solutions and cutting-edge technology projects that transform businesses and enhance user experiences through modern development practices.
					</p>
					<div class="br-line d-flex"></div>
					<ul class="tf-list vertical">
						<li class="letter-space--1">
							<span class="text-primary">//</span> Web Applications
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Mobile Development
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Database Solutions
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> API Integration
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> SaaS Platforms
						</li>
					</ul>
					<button onclick={() => onOpenModal('technology')} class="tf-btn">
						SEE MORE
					</button>
				</div>
				<div class="image-simu">
				</div>
				<div class="image-2">
					<img loading="lazy" width="212" height="265" src="/assets/images/section/bank-small.jpg " alt="Finance and Fintech project showcase smaller">
				</div>
			</div>
			<!-- Project 2: Finance & Fintech -->
			<div class="wg-service-2">
				<div class="main-image">
					<div class="image">
						<img loading="lazy" width="424" height="530" src="/assets/images/section/financial-main.png" alt="Finance and Fintech project showcase">
					</div>
					<div class="action tf-btn-2 cs-pointer">
						<i class="icon icon-arrow-long-right"></i>
					</div>
				</div>
				<div class="center">
					<h5 class="title">
						Finance & Fintech
					</h5>
					<p class="desc">
						Financial technology solutions that revolutionize banking, payments, and investment platforms with secure, scalable, and user-friendly interfaces.
					</p>
					<div class="br-line d-flex"></div>
					<ul class="tf-list vertical">
						<li class="letter-space--1">
							<span class="text-primary">//</span> Payment Systems
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Banking Platforms
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Investment Apps
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Blockchain Solutions
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Financial Analytics
						</li>
					</ul>
					<button onclick={() => onOpenModal('finance')} class="tf-btn">
						SEE MORE
					</button>
				</div>
				<div class="image-simu">
				</div>
				<div class="image-2">
					<img loading="lazy" width="212" height="265" src="/assets/images/section/Business-main.png" alt="Business-main project showcase smaller">
				</div>
			</div>
			<!-- Project 3: Edge Vision - AI Posture Detection -->
			<div class="wg-service-2">
				<div class="main-image">
					<div class="image">
						<img loading="lazy" width="424" height="530" src="/assets/images/section/Business-main-big.png" alt="Edge Vision AI Posture Detection project showcase">
					</div>
					<div class="action tf-btn-2 cs-pointer">
						<i class="icon icon-arrow-long-right"></i>
					</div>
				</div>
				<div class="center">
					<h5 class="title">
						Edge Vision – AI Posture Detection
					</h5>
					<p class="desc">
						AI-powered desktop application developed during the Demola innovation program to help office workers and gamers improve their posture using computer vision and machine learning.
					</p>
					<div class="br-line d-flex"></div>
					<ul class="tf-list vertical">
						<li class="letter-space--1">
							<span class="text-primary">//</span> Computer Vision
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Machine Learning
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Real-Time Detection
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Desktop Application
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Python & OpenCV
						</li>
					</ul>
					<button onclick={() => onOpenModal('edgevision')} class="tf-btn">
						SEE MORE
					</button>
				</div>
				<div class="image-simu">
				</div>
				<div class="image-2">
					<img loading="lazy" width="212" height="265" src="/assets/images/section/mainhealth.png" alt="Health & Wellness mobile app showcase">
				</div>
			</div>
			<!-- Project 4: Health & Wellness -->
			<div class="wg-service-2">
				<div class="main-image">
					<div class="image">
						<img loading="lazy" width="424" height="530" src="/assets/images/section/healthcaremain1.png" alt="Health & Wellness mobile app showcase">
					</div>
					<div class="action tf-btn-2 cs-pointer">
						<i class="icon icon-arrow-long-right"></i>
					</div>
				</div>
				<div class="center">
					<h5 class="title">
						Health & Wellness
					</h5>
					<p class="desc">
						Cross-platform healthcare mobile application built with Flutter, connecting patients and doctors through profile management, appointment booking, and real-time online consultations.
					</p>
					<div class="br-line d-flex"></div>
					<ul class="tf-list vertical">
						<li class="letter-space--1">
							<span class="text-primary">//</span> Flutter Mobile App
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Patient & Doctor Management
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Online Consultation System
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Real-Time Communication
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Android & iOS
						</li>
					</ul>
					<button onclick={() => onOpenModal('health')} class="tf-btn">
						SEE MORE
					</button>
				</div>
				<div class="image-simu">
				</div>
				<div class="image-2">
					<img loading="lazy" width="212" height="265" src="/assets/images/section/dexerphone.png" alt="Dexer Decentralized Exchange mobile app showcase">
				</div>
			</div>
			<!-- Project 5: Dexer - Decentralized Exchange -->
			<div class="wg-service-2">
				<div class="main-image">
					<div class="image">
						<img loading="lazy" width="424" height="530" src="/assets/images/section/maindexerbig.png" alt="Dexer Decentralized Exchange mobile app showcase">
					</div>
					<div class="action tf-btn-2 cs-pointer">
						<i class="icon icon-arrow-long-left"></i>
					</div>
				</div>
				<div class="center">
					<h5 class="title">
						Dexer(Decentralized Cryptocurrency Token Swap Platform)
					</h5>
					<p class="desc">
						Dexer is a Web3 decentralized exchange (DEX) application that enables users to securely swap cryptocurrency tokens directly through blockchain smart contracts without relying on a centralized intermediary. The platform combines a user-friendly Svelte frontend with Ethereum smart contracts developed using Foundry, providing a fast, transparent, and secure token trading experience.
					</p>
					<div class="br-line d-flex"></div>
					<ul class="tf-list vertical">
						<li class="letter-space--1">
							<span class="text-primary">//</span> Smart Contract Development
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Token Swap Mechanics
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Wallet Integration
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Foundry Testing & Deployment
						</li>
						<li class="letter-space--1">
							<span class="text-primary">//</span> Svelte Web3 Frontend
						</li>
					</ul>
					<button onclick={() => onOpenModal('dexer')} class="tf-btn">
						SEE MORE
					</button>
				</div>
				<div class="image-simu">
				</div>
			</div>
		</div>
	</div>
</section>
<!-- /Projects -->
