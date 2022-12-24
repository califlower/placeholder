<script>
	import { page } from '$app/stores';
</script>

<section class="flex flex-1">
	{#if $page.status === 404}
		<div class="flex flex-1 flex-col items-center justify-center bg-indigo-200">
			<p class="text-5xl text-white md:text-7xl lg:text-9xl">Page Not Found</p>
		</div>
	{:else}
		<p class="font-mono">Something Happened</p>
	{/if}
</section>
