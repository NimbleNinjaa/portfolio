<script lang="ts">
	interface GalleryItem {
		src: string;
		thumb: string;
		title: string;
		content: string;
		link?: string;
		isVideo?: boolean;
	}

	interface ProjectData {
		gallery: GalleryItem[];
	}

	let {
		isOpen = $bindable(false),
		projectId = $bindable('')
	}: {
		isOpen: boolean;
		projectId: string;
	} = $props();

	let currentIndex = $state(0);
	let videoElement: HTMLVideoElement | null = $state(null);
	let isPlaying = $state(true);
	let currentTime = $state(0);
	let duration = $state(0);
	let progress = $state(0);

	// Reset index when project changes
	$effect(() => {
		if (projectId) {
			currentIndex = 0;
			isPlaying = true;
		}
	});

	// Video control functions
	function togglePlay() {
		if (!videoElement) return;
		if (videoElement.paused) {
			videoElement.play();
			isPlaying = true;
		} else {
			videoElement.pause();
			isPlaying = false;
		}
	}

	function handleTimeUpdate() {
		if (!videoElement) return;
		currentTime = videoElement.currentTime;
		duration = videoElement.duration || 0;
		progress = duration > 0 ? (currentTime / duration) * 100 : 0;
	}

	function handleSeek(e: MouseEvent) {
		if (!videoElement) return;
		const progressBar = e.currentTarget as HTMLElement;
		const rect = progressBar.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const percentage = clickX / rect.width;
		videoElement.currentTime = percentage * videoElement.duration;
	}

	function formatTime(seconds: number): string {
		if (isNaN(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	const projectsData: Record<string, ProjectData> = {
		technology: {
			gallery: [
				{
					src: '/assets/images/section/technology-1.png',
					thumb: '/assets/images/section/technology-1.png',
					title: 'BFLOO — AI-Assisted Visual Database Schema Builder',
					content:
						'Led the UI/UX design and full-stack development of BFLOO, an AI-assisted no-code database schema builder.|Defined the product roadmap, created wireframes and interactive prototypes, and built a scalable design system with 1,500+ components. Collaborated with frontend, backend, and AI teams to deliver the platform from concept to production.|Product Roadmap & Feature Planning|Wireframes & Interactive Prototypes|1,500+ Reusable Components|Full-Stack Development|AI-Powered Platform Delivery',
					link: 'https://bfloo.com/'
				},
				{
					src: '/assets/images/section/bg-service-2.png',
					thumb: '/assets/images/section/bg-service-2.png',
					title: 'Product Strategy, Roadmap & Planning',
					content:
						'Defined the product roadmap and design strategy from the initial concept to MVP and final release. Planned feature priorities, user flows, and system structure to align design and development efforts.|Created wireframes, user journeys, and interactive prototypes in Figma to validate ideas early and guide the development team with clear implementation direction.|Product Roadmap Definition|Design Strategy|Feature Prioritization|User Flow Planning|Figma Prototyping',
					link: 'https://bfloo.com/'
				},
				{
					src: '/assets/images/section/bg-service-3.png',
					thumb: '/assets/images/section/bg-service-3.png',
					title: 'UI/UX Design, Prototyping & User Testing',
					content:
						'Designed and built a complete atomic design system with over 1,500 reusable components, including atoms, molecules, organisms, templates, and full pages. Implemented design tokens, component variants, and responsive behavior.|Led the full UI/UX design process including wireframing, prototyping, usability testing, and iterative improvements. Designed responsive, accessible interfaces following WCAG standards.|Atomic Design System|1,500+ Components|Design Tokens & Variants|WCAG Accessibility|Usability Testing',
					link: 'https://bfloo.com/'
				},
				{
					src: '/assets/images/section/dashboarad-1.png',
					thumb: '/assets/images/section/dashboarad-1.png',
					title: 'Full-Stack Development & Dashboard Implementation',
					content:
						'Worked as a full-stack developer implementing both frontend and backend features in collaboration with two developers.|Took primary responsibility for the dashboard application, schema editor interface, and integration between frontend components and backend systems.|Full-Stack Development|Dashboard Application|Schema Editor Interface|Frontend-Backend Integration|Team Collaboration',
					link: 'https://bfloo.com/'
				},
				{
					src: '/assets/images/section/dashboarad-2.png',
					thumb: '/assets/images/section/dashboarad-2.png',
					title: 'AI Integration & Cross-Team Collaboration',
					content:
						'Worked closely with the AI engineering team to design AI interaction workflows and conversational interfaces.|Ensured seamless integration between AI-generated schema changes and the visual interface, improving usability and user productivity.|AI Interaction Workflows|Conversational Interfaces|AI-Generated Schema Integration|Cross-Team Collaboration|User Productivity Enhancement',
					link: 'https://bfloo.com/'
				}
			]
		},
		finance: {
			gallery: [
				{
					src: '/assets/images/section/service-3.png',
					thumb: '/assets/images/section/service-3.png',
					title: 'LuxPay — Digital Banking & Financial Platform',
					content:
						'Led the design and frontend development of LuxPay, a modern fintech mobile application inspired by leading digital banking platforms such as Revolut. The platform was designed to provide secure financial services, digital payments, investment management, and banking solutions through a seamless mobile experience.|Managed a team of 4 UI/UX designers and collaborated with 10 software developers throughout the product lifecycle. Owned the product experience from initial discovery and roadmap planning to design system creation, prototyping, and frontend implementation.|Product Roadmap Creation|Design Team Leadership|UX Research & Design|Frontend Development|Fintech Platform Design'
				},
				{
					src: '/assets/images/section/service-1.png',
					thumb: '/assets/images/section/service-1.png',
					title: 'Product Strategy & Roadmap Planning',
					content:
						'Established the product vision, defined business requirements, and created the roadmap that guided the platform from concept to development.|This phase focused on identifying user needs, prioritizing features, and aligning business goals with customer expectations.|Product Roadmap Creation|Fintech Feature Planning|User Journey Mapping|Information Architecture|Stakeholder Alignment'
				},
				{
					src: '/assets/images/section/service-2.png',
					thumb: '/assets/images/section/service-2.png',
					title: 'UX Research & Experience Design',
					content:
						'Led the UX team in designing intuitive financial experiences that simplified banking, payments, and investment management.|User flows, wireframes, and prototypes were developed to validate concepts before development began.|User Research & Analysis|Customer Journey Mapping|Flowchart Design|Low & High Fidelity Wireframes|Interactive Prototyping'
				},
				{
					src: '/assets/images/section/service-3.jpg',
					thumb: '/assets/images/section/service-3.jpg',
					title: 'Design System & Team Leadership',
					content:
						'Led the design and front-end development of LuxPay, a fintech mobile application for digital banking and personal finance management. Worked within a 36-member product team (30 developers, 6 designers), leading the design team while collaborating closely with engineers and stakeholders. Built and maintained a scalable design system, developed mobile interfaces using Flutter, used GitHub for version control and team collaboration, and worked with the development team to write and maintain unit tests for a reliable and high-quality product.|Design Leadership|Design System|Flutter Development|GitHub Collaboration|Unit Testing'
				},
				
				
			]
		},
		edgevision: {
			gallery: [
				{
					src: '/assets/video/Comp 2.mp4',
					thumb: '/assets/images/section/service-3.jpg',
					title: 'Edge Vision – AI Posture Detection Application',
					content:
						"Edge Vision is an AI-powered desktop application developed during the Demola innovation program to help office workers and gamers improve their posture. Using computer vision and machine learning, the application analyzes the user's sitting position in real time and provides feedback to encourage healthier habits.|Over a two-month development period, our team trained a custom machine learning model using more than 5,000 images and built a fully functional prototype.|AI-Powered Detection|Computer Vision|Machine Learning|Real-Time Feedback|Desktop Application",
					isVideo: true
				},
				{
					src: '/assets/images/section/machin.png',
					thumb: '/assets/images/section/machin.png',
					title: 'Full Stack Developer Role',
					content:
						"As the Full Stack Developer on the project, I was responsible for developing and refining the desktop application user interface, integrating the machine learning model into the application workflow, and connecting frontend and backend components to enable real-time posture detection.|Collaborated with the team to design system architecture and solve technical challenges. Testing, debugging, and optimizing the overall application experience.|Desktop UI Development|ML Model Integration|Frontend-Backend Connection|System Architecture|Testing & Optimization",
					link: 'https://github.com/NimbleNinjaa/Posture-App'
				},
				{
					src: '/assets/images/section/python-core.png',
					thumb: '/assets/images/section/python-core.png',
					title: 'Tech Stack',
					content:
						'Built with Python for core application and backend logic, QML/PySide6 (Qt) for cross-platform desktop user interface, and OpenCV for real-time image processing and computer vision.|MediaPipe for human pose estimation and landmark detection, YOLOv3 for object detection and posture analysis support, and custom ML model training using 5,000+ images.|Python|QML / PySide6 (Qt)|OpenCV|MediaPipe|YOLOv3'
				},
				{
					src: '/assets/images/section/learning.png',
					thumb: '/assets/images/section/learning.png',
					title: 'What I Learned',
					content:
						'This project was an opportunity to gain hands-on experience with the complete lifecycle of an AI-powered application—from data collection and model training to software integration and deployment.|The experience reinforced my interest in building practical, user-centered software solutions that combine modern AI technologies with intuitive design and development.|Functional Posture Detection App|Custom ML Model (5,000+ images)|Computer Vision & AI Technologies|Full Stack Development Skills|Demola Program Delivery'
				}
			]
		},
		health: {
			gallery: [
				{
					src: '/assets/video/healthcare.mp4',
					thumb: '/assets/images/section/health1.png',
					title: 'Mobile Application Development',
					content:
						'Developed a cross-platform mobile application using Flutter, delivering a smooth and consistent experience on both Android and iOS devices.|Built with Dart on a single Flutter codebase to keep both platforms in sync while maintaining native-like performance.|Flutter|Dart|Cross-Platform Development|Android|iOS',
					isVideo: true
				},
				{
					src: '/assets/images/section/doctor-list.png',
					thumb: '/assets/images/section/doctor-list.png',
					title: 'Patient & Doctor Management',
					content:
						'Implemented features for patient registration, profile management, appointment booking, and healthcare provider interactions.|Structured profiles and scheduling tools made it easy for patients and doctors to connect and manage care.|Patient Registration|Profile Management|Appointment Booking|Provider Interactions'
				},
				{
					src: '/assets/images/section/make-appointment.png',
					thumb: '/assets/images/section/make-appointment.png',
					title: 'Online Consultation System',
					content:
						'Integrated real-time communication capabilities to support remote medical consultations and improve healthcare accessibility.|Patients can reach healthcare professionals remotely, cutting down barriers to timely care.|Real-Time Communication|Remote Consultations|Video Calls|Healthcare Accessibility'
				},
				{
					src: '/assets/images/section/appointment.png',
					thumb: '/assets/images/section/appointment.png',
					title: 'User Experience & Performance',
					content:
						'Designed an intuitive mobile interface focused on ease of use, accessibility, and efficient navigation for both patients and healthcare professionals.|Prioritized responsive performance and clear navigation to keep the app usable across a wide range of devices.|Intuitive UI|Accessibility|Efficient Navigation|Responsive Performance'
				},
				{
					src: '/assets/images/section/healthsystemdesign.png',
					thumb: '/assets/images/section/healthsystemdesign.png',
					title: 'Technologies',
					content:
						'Built using Flutter and Dart for the mobile application, with REST APIs and Firebase powering backend services.|Authentication and real-time communication were integrated to support secure, connected experiences across Android and iOS.|Flutter|Dart|REST APIs|Firebase / Backend Services|Authentication|Real-Time Communication|Android|iOS'
				}
			]
		},
		entertainment: {
			gallery: [
				{
					src: '/assets/images/section/service-2.jpg',
					thumb: '/assets/images/section/service-2.jpg',
					title: 'Video Streaming Platform',
					content:
						'4K video streaming platform with adaptive bitrate supporting millions of concurrent viewers.|CDN integration for global content delivery with minimal buffering and latency.|4K Streaming|Adaptive Bitrate|Global CDN|Offline Downloads|Multi-device Sync'
				},
				{
					src: '/assets/images/section/service-1.jpg',
					thumb: '/assets/images/section/service-1.jpg',
					title: 'Content Management System',
					content:
						'Headless CMS powering multi-channel content delivery for news and entertainment sites.|API-first architecture enabling content distribution across web, mobile, and smart TVs.|Headless Architecture|Multi-channel Delivery|Content Scheduling|Asset Management|SEO Optimization'
				},
				{
					src: '/assets/images/section/service-3.jpg',
					thumb: '/assets/images/section/service-3.jpg',
					title: 'Mobile Gaming Platform',
					content:
						'Cross-platform mobile gaming app with real-time multiplayer and in-app purchases.|Unity-based game engine with leaderboards, achievements, and social features.|Real-time Multiplayer|In-app Purchases|Leaderboards|Social Features|Cross-platform Play'
				},
				{
					src: '/assets/images/section/bg-service-1.jpg',
					thumb: '/assets/images/section/bg-service-1.jpg',
					title: 'Social Media Integration',
					content:
						'Social media integration hub enabling seamless sharing across all major platforms.|One-click sharing with analytics tracking and engagement optimization.|One-click Sharing|Analytics Dashboard|Engagement Tracking|Auto-posting|Audience Insights'
				},
				{
					src: '/assets/images/section/bg-service-2.jpg',
					thumb: '/assets/images/section/bg-service-2.jpg',
					title: 'Live Broadcasting',
					content:
						'Live broadcasting solution with low-latency streaming and interactive chat features.|Professional-grade streaming tools with real-time viewer engagement.|Low-latency Streaming|Interactive Chat|Viewer Analytics|Monetization Tools|Multi-platform Broadcast'
				}
			]
		},
		dexer: {
			gallery: [
				{
					src: '/assets/images/section/dexerthreeview.png',
					thumb: '/assets/images/section/dexerthreeview.png',
					title: 'Dexer — Decentralized Cryptocurrency Token Swap Platform',
					content:
						'Dexer is a Web3 decentralized exchange (DEX) application that enables users to securely swap cryptocurrency tokens directly through blockchain smart contracts without relying on a centralized intermediary.|The platform combines a user-friendly Svelte frontend with Ethereum smart contracts developed using Foundry, providing a fast, transparent, and secure token trading experience.|Decentralized Token Swaps|Smart Contract Architecture|Wallet Connect Integration|Svelte Frontend|Foundry Testing',
					link: 'https://github.com/Web3Horizon'
				},
				{
					src: '/assets/images/section/dexerfromlaswapping.png',
					thumb: '/assets/images/section/dexerfromlaswapping.png',
					title: 'Smart Contract Development',
					content:
						'Designed and implemented the token swap smart contracts using Solidity and Foundry, covering liquidity handling, slippage protection, and swap execution.|Wrote a comprehensive Foundry test suite to validate contract behavior and guard against edge cases before deployment.|Solidity Contracts|Foundry Test Suite|Slippage Protection|Liquidity Handling|Gas Optimization',
					link: 'https://github.com/Web3Horizon'
				},
				{
					src: '/assets/images/section/dexertechnology.png',
					thumb: '/assets/images/section/dexertechnology.png',
					title: 'Web3 Frontend Integration',
					content:
						'Built the Svelte frontend to connect directly to user wallets and interact with the deployed smart contracts in real time.|Focused on a clear, transparent swap flow so users can see rates, fees, and transaction status without leaving the app.|Wallet Connection|Real-time Swap Quotes|Transaction Status Tracking|Responsive UI|On-chain Data Fetching',
					link: 'https://github.com/Web3Horizon'
				}
			]
		}
	};

	const currentProject = $derived(projectsData[projectId] || projectsData.technology);
	const currentItem = $derived(currentProject.gallery[currentIndex] || currentProject.gallery[0]);
	const contentParts = $derived.by(() => {
		const parts = currentItem.content.split('|');
		return {
			description1: parts[0] || '',
			description2: parts[1] || '',
			features: parts.slice(2) || []
		};
	});

	function close() {
		isOpen = false;
		currentIndex = 0;
	}

	function navigateGallery(direction: 'prev' | 'next') {
		const total = currentProject.gallery.length;
		if (direction === 'prev') {
			currentIndex = (currentIndex - 1 + total) % total;
		} else {
			currentIndex = (currentIndex + 1) % total;
		}
	}

	function selectImage(index: number) {
		currentIndex = index;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') navigateGallery('prev');
		if (e.key === 'ArrowRight') navigateGallery('next');
	}

	$effect(() => {
		if (isOpen) {
			document.body.classList.add('modal-open');
			window.addEventListener('keydown', handleKeydown);
		} else {
			document.body.classList.remove('modal-open');
		}
		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.body.classList.remove('modal-open');
		};
	});
</script>

{#if isOpen}
	<div class="project-modal active" id="modal-{projectId}">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="project-modal-overlay" onclick={close}></div>
		<div class="project-modal-content">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="project-modal-close" onclick={close}>
				<i class="icon icon-close"></i>
				CLOSE
			</div>
			<div class="project-modal-inner">
				<div class="project-modal-left">
					<div class="project-gallery">
						<div class="project-gallery-main-wrapper">
							<div class="project-gallery-main">
								{#if currentItem.isVideo}
									<div class="video-container">
										<video
											bind:this={videoElement}
											src={currentItem.src}
											autoplay
											loop
											muted
											playsinline
											ontimeupdate={handleTimeUpdate}
											onloadedmetadata={handleTimeUpdate}
										>
											<track kind="captions" />
										</video>
										<div class="video-controls">
											<button class="video-play-btn" onclick={togglePlay}>
												{#if isPlaying}
													<svg viewBox="0 0 24 24" fill="currentColor">
														<rect x="6" y="4" width="4" height="16" rx="1" />
														<rect x="14" y="4" width="4" height="16" rx="1" />
													</svg>
												{:else}
													<svg viewBox="0 0 24 24" fill="currentColor">
														<path d="M8 5v14l11-7z" />
													</svg>
												{/if}
											</button>
											<div class="video-time">{formatTime(currentTime)}</div>
											<!-- svelte-ignore a11y_click_events_have_key_events -->
											<!-- svelte-ignore a11y_no_static_element_interactions -->
											<div class="video-progress" onclick={handleSeek}>
												<div class="video-progress-bar" style="width: {progress}%"></div>
											</div>
											<div class="video-time">{formatTime(duration)}</div>
										</div>
									</div>
								{:else}
									<img src={currentItem.src} alt={currentItem.title} />
								{/if}
							</div>
						</div>
						<div class="project-gallery-thumbs">
							{#each currentProject.gallery as item, index}
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<!-- svelte-ignore a11y_no_static_element_interactions -->
								<div
									class="thumb {index === currentIndex ? 'active' : ''}"
									onclick={() => selectImage(index)}
								>
									{#if item.isVideo}
										<div class="thumb-video">
											<video src={item.src} muted playsinline preload="metadata">
												<track kind="captions" />
											</video>
											<div class="thumb-video-icon">
												<svg viewBox="0 0 24 24" fill="currentColor">
													<path d="M8 5v14l11-7z" />
												</svg>
											</div>
										</div>
									{:else}
										<img src={item.thumb} alt="Thumb {index + 1}" />
									{/if}
								</div>
							{/each}
						</div>
						<div class="project-gallery-controls">
							<button class="nav-btn prev-btn" aria-label="Previous image" onclick={() => navigateGallery('prev')}>
								<i class="icon icon-arrow-caret-left"></i>
							</button>
							<div class="project-gallery-dots">
								{#each currentProject.gallery as _, index}
									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<!-- svelte-ignore a11y_no_static_element_interactions -->
									<span
										class="dot {index === currentIndex ? 'active' : ''}"
										data-index={index}
										onclick={() => selectImage(index)}
									></span>
								{/each}
							</div>
							<button class="nav-btn next-btn" aria-label="Next image" onclick={() => navigateGallery('next')}>
								<i class="icon icon-arrow-caret-right"></i>
							</button>
						</div>
					</div>
				</div>
				<div class="project-modal-right">
					<h3 class="project-modal-title">{currentItem.title}</h3>
					<div class="project-modal-desc">
						<p>{contentParts.description1}</p>
						<p>{contentParts.description2}</p>
						<h5>Key Features:</h5>
						<ul class="tf-list vertical">
							{#each contentParts.features as feature}
								<li><span class="text-primary">//</span> {feature}</li>
							{/each}
						</ul>
						{#if currentItem.link}
							<div class="project-link">
								<a href={currentItem.link} target="_blank" rel="noopener noreferrer" class="tf-btn">
									{#if currentItem.link.includes('github.com')}
										<svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										<span>Check the Code</span>
									{:else}
										<span>Visit Website</span>
										<i class="icon icon-arrow-top-right"></i>
									{/if}
								</a>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.video-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 8px;
		background: #000;
	}

	.video-container video {
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		border-radius: 8px;
	}

	.video-controls {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
		border-radius: 0 0 8px 8px;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.video-container:hover .video-controls {
		opacity: 1;
	}

	.video-play-btn {
		width: 40px;
		height: 40px;
		border: none;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		transition: all 0.2s ease;
		flex-shrink: 0;
	}

	.video-play-btn:hover {
		background: rgba(255, 255, 255, 0.25);
		transform: scale(1.05);
	}

	.video-play-btn svg {
		width: 18px;
		height: 18px;
	}

	.video-time {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.9);
		font-family: monospace;
		min-width: 40px;
		text-align: center;
	}

	.video-progress {
		flex: 1;
		height: 6px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.video-progress:hover {
		height: 8px;
	}

	.video-progress-bar {
		height: 100%;
		background: linear-gradient(90deg, #6366f1, #8b5cf6);
		border-radius: 3px;
		transition: width 0.1s linear;
		position: relative;
	}

	.video-progress-bar::after {
		content: '';
		position: absolute;
		right: -6px;
		top: 50%;
		transform: translateY(-50%);
		width: 12px;
		height: 12px;
		background: #fff;
		border-radius: 50%;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.video-progress:hover .video-progress-bar::after {
		opacity: 1;
	}

	/* Video thumbnail styles */
	.thumb-video {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: inherit;
	}

	.thumb-video video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.thumb-video-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 24px;
		height: 24px;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	.thumb-video-icon svg {
		width: 12px;
		height: 12px;
		color: #fff;
		margin-left: 2px;
	}

	/* GitHub icon styles */
	.github-icon {
		width: 20px;
		height: 20px;
		margin-right: 8px;
		flex-shrink: 0;
	}
</style>
