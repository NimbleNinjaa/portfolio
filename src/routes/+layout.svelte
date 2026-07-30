<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Preloader from '$lib/components/ui/Preloader.svelte';
	import ScrollToTop from '$lib/components/ui/ScrollToTop.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>HÄMID - Personal Portfolio</title>
	<meta name="description" content="Hamid's Personal Portfolio - full-stack software engineer specializing in web and mobile applications, UI/UX design, and blockchain development." />
</svelte:head>

<Preloader />

<main id="wrapper">
	<Header />
	{@render children()}
	<Footer />
</main>

<ScrollToTop />

