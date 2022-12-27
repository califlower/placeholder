<script lang="ts">
	export let handler: any;
</script>

<div class="flex flex-1 items-center justify-center">
	<div class="mb-24 text-center">
		<h1 class="mb-4 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
			No Bank Connected!
		</h1>
		<p class="mx-5 mb-5 text-base text-gray-600">
			You'll need to connect a bank in order to see real card recommendations based on your
			transaction history!
		</p>
		<div class="h-4" />
		<div>
			<ul class="steps">
				<li class="step-primary step mx-12">Connect</li>
				<li class="step mx-2">Analyze!</li>
				<li class="step">Done!</li>
			</ul>
		</div>
		<div class="h-12" />

		<button
			on:click={() => {
				handler.open();
			}}
			class="btn">Connect Bank</button
		>
	</div>
</div>
