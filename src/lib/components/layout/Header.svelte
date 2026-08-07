<script lang="ts">
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) {
			document.body.classList.add('mobile-menu-open');
		} else {
			document.body.classList.remove('mobile-menu-open');
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.body.classList.remove('mobile-menu-open');
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') closeMobileMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="tf-header">
	<div class="header-inner">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-auto">
					<a href="/" class="logo-site" aria-label="Home">
						<img src="/assets/images/logo/logo-mark.svg" alt="Hamid" width="34" height="34">
					</a>
				</div>
				<div class="col d-none d-md-flex justify-content-center">
					<div class="box-navigation">
						<ul class="nav-menu-main">
							<li class="menu-item"><a href="#workScroll" class="item-link link text-caption">WORKS</a></li>
							<li class="menu-item"><a href="#projectsScroll" class="item-link link text-caption">PROJECTS</a></li>
							<li class="menu-item"><a href="#aboutScroll" class="item-link link text-caption">ABOUT</a></li>
							<li class="menu-item"><a href="#contactScroll" class="item-link link text-caption">CONTACT</a></li>
						</ul>
					</div>
				</div>
				<div class="col-auto d-md-none ms-auto">
					<button type="button" class="btn-mobile-menu open-mb-menu text-caption text-white link" onclick={toggleMobileMenu} aria-expanded={mobileMenuOpen} aria-controls="mobile-nav">
						<i class="icon icon-menu"></i>
						MENU
					</button>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Mobile Menu -->
<div id="mobile-nav" class="offcanvas-menu" class:show={mobileMenuOpen} inert={!mobileMenuOpen}>
	<div class="offcanvas-content">
		<div class="offcanvas-content_wrapin container">
			<div class="canvas_head">
				<a href="/" class="logo-site" aria-label="Home" onclick={closeMobileMenu}>
					<img src="/assets/images/logo/logo-mark.svg" alt="Hamid" width="34" height="34">
				</a>
				<button type="button" class="btn-close-mb-menu text-white" onclick={closeMobileMenu} aria-label="Close menu">
					<i class="icon icon-close"></i>
				</button>
			</div>
			<div class="canvas_center">
				<ul class="nav-ul-mb">
					<li>
						<div class="item">
							<a href="#workScroll" class="mb-menu-link" onclick={closeMobileMenu}>
								<span class="text">Works</span>
							</a>
						</div>
					</li>
					<li>
						<div class="item">
							<a href="#projectsScroll" class="mb-menu-link" onclick={closeMobileMenu}>
								<span class="text">Projects</span>
							</a>
						</div>
					</li>
					<li>
						<div class="item">
							<a href="#aboutScroll" class="mb-menu-link" onclick={closeMobileMenu}>
								<span class="text">About</span>
							</a>
						</div>
					</li>
					<li>
						<div class="item">
							<a href="#contactScroll" class="mb-menu-link" onclick={closeMobileMenu}>
								<span class="text">Contact</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="canvas_foot">
				<div class="left">
					<a href="mailto:hamidreza.yourdkhani1993@gmail.com" class="link text-caption text-white-64">
						hamidreza.yourdkhani1993@gmail.com
					</a>
				</div>
				<div class="right">
					<a href="https://github.com/NimbleNinjaa" target="_blank" rel="noopener noreferrer" class="link text-caption">GitHub</a>
					<a href="https://www.instagram.com/kuva_fi" target="_blank" rel="noopener noreferrer" class="link text-caption">Instagram</a>
				</div>
			</div>
		</div>
	</div>
</div>
