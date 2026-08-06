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
</script>

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
					<button type="button" class="btn-mobile-menu open-mb-menu text-caption text-white link" onclick={toggleMobileMenu}>
						<i class="icon icon-menu"></i>
						MENU
					</button>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Mobile Menu -->
{#if mobileMenuOpen}
	<div class="mobile-menu-wrap {mobileMenuOpen ? 'active' : ''}">
		<div class="mobile-menu-overlay" onclick={closeMobileMenu}></div>
		<div class="mobile-menu-content">
			<button type="button" class="btn-close-mb-menu text-white" onclick={closeMobileMenu}>
				<i class="icon icon-close"></i>
			</button>
			<nav class="mobile-menu-main">
				<ul>
					<li><a href="#workScroll" class="link" onclick={closeMobileMenu}>WORKS</a></li>
					<li><a href="#projectsScroll" class="link" onclick={closeMobileMenu}>PROJECTS</a></li>
					<li><a href="#aboutScroll" class="link" onclick={closeMobileMenu}>ABOUT</a></li>
					<li><a href="#contactScroll" class="link" onclick={closeMobileMenu}>CONTACT</a></li>
				</ul>
			</nav>
		</div>
	</div>
{/if}
