<script>
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<div class="flex h-screen flex-col">
	<slot />
	<Footer />
</div>
