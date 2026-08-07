<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import SelectedWork from '$lib/components/sections/SelectedWork.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Process from '$lib/components/sections/Process.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Brands from '$lib/components/sections/Brands.svelte';
	import Stats from '$lib/components/sections/Stats.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import ProjectModal from '$lib/components/sections/ProjectModal.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let modalOpen = $state(false);
	let currentProjectId = $state('');
	
	function handleOpenModal(projectId: string) {
		currentProjectId = projectId;
		modalOpen = true;
	}
</script>

<!-- Hero Section -->
<Hero />

<!-- Selected Work Section -->
<SelectedWork />

<!-- Projects Section -->
<Projects onOpenModal={handleOpenModal} />

<!-- Process Section -->
<Process />

<!-- About Section -->
<About />

<!-- Brands Section -->
<Brands />

<!-- Stats Section -->
<Stats />

<!-- FAQ Section -->
<FAQ />

<!-- Contact Section -->
<Contact {form} />

<!-- Project Modal -->
<ProjectModal bind:isOpen={modalOpen} bind:projectId={currentProjectId} />
