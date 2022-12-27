<script>
	import Header from '$components/Header.svelte';
</script>

<div class="homepage-gradient flex flex-1 flex-col">
	<Header />
	<div class="m-6 flex h-full flex-col items-center justify-center">
		<div class="prose-lg prose mx-6 md:mx-auto">
			<div class="flex space-x-6">
				<div>
					<h1
						class="mb-3 inline text-5xl font-bold text-slate-200 md:font-extrabold md:leading-tight"
					>
						Discover the best card for you on
						<p class="inline text-blue-100 underline">pointlift.ai</p>
					</h1>

					<div class="h-4" />
					<div class="prose mx-auto">
						<p class="mb-6 text-lg text-slate-200 md:text-xl md:leading-normal">
							Compare potential credit card rewards from across the market using personalized
							transaction data
						</p>
					</div>
				</div>

				<img src="/venture-x-demo.webp" alt="Venture X Credit Card" class="hidden h-32 md:inline" />
			</div>
			<div class="h-12" />
			<div class="flex flex-row items-center justify-center space-x-6">
				<button class="btn rounded-2xl bg-slate-800 text-xs">Connect your card →</button>
				<button class="text-white transition hover:underline hover:opacity-60">View Demo</button>
			</div>
		</div>
	</div>
</div>
