<script lang="ts">
	import { onMount } from 'svelte';
	
	let isLoading = $state(true);
	
	onMount(() => {
		// Let the original CSS handle the animation
		setTimeout(() => {
			isLoading = false;
			document.body.classList.remove('preloader-active');
		}, 2000);
	});
</script>

{#if isLoading}
	<div class="preloader overflow-hidden">
		<div class="site-name"><span>Hämid  </span></div>
		<div class="preloader-gutters">
			{#each Array(8) as _}
				<div class="bar">
					<div class="inner-bar"></div>
				</div>
			{/each}
		</div>
	</div>
{/if}
