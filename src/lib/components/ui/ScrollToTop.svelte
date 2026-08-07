<script lang="ts">
	import { onMount } from 'svelte';
	
	let scrollProgress = $state(0);
	
	function handleScroll() {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = (scrollTop / docHeight) * 100;
		scrollProgress = progress;
	}
	
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button id="goTop" onclick={scrollToTop} aria-label="Scroll to top">
	<span class="border-progress" style="--progress: {scrollProgress}%"></span>
	<span class="ic-wrap">
		<span class="icon icon-arrow-caret-right"></span>
	</span>
</button>
