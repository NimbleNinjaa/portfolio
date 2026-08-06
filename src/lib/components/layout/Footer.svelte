<!-- Footer -->
<script lang="ts">
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<footer class="tf-footer">
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
					<ul class="footer-social-list effectFade fadeUp">
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
				<div class="col-6 col-sm-2 col-md-1">
					<p class="footer-heading text-caption fw-medium text-white-64 effectFade fadeUp">
						SITEMAP
					</p>
				</div>
				<div class="col-6 col-sm-4 col-md-3">
					<ul class="footer-menu-list mb-sm-0 effectFade fadeUp">
						<li><a href="/" class="link letter-space--2 h5">Home</a></li>
						<li><a href="#workScroll" class="link letter-space--2 h5">Selected Work</a></li>
						<li><a href="#projectsScroll" class="link letter-space--2 h5">Projects</a></li>
						<li><a href="#processScroll" class="link letter-space--2 h5">Process</a></li>
						<li><a href="#aboutScroll" class="link letter-space--2 h5">About</a></li>
					</ul>
				</div>
				<div class="col-6 col-sm-4 col-md-3">
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
			<div class="img-agency">
				<img class="effectFade fadeZoom" loading="lazy" width="1293" height="269" src="/assets/images/logo/agency.png" alt="Hamid">
			</div>
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
	.footer-cta-heading {
		margin-top: 16px;
		margin-bottom: 16px;
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
