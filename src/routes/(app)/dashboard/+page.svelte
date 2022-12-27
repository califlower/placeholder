<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	async function initPlaid() {
		// Grab a Link token to initialize Link
		const createLinkToken = async () => {
			const res = await fetch('/api/plaid/create_link_token');
			const data = await res.json();
			const linkToken = data.link_token;
			localStorage.setItem('link_token', linkToken);
			return linkToken;
		};

		// Initialize Link
		// @ts-ignore
		const handler = Plaid.create({
			token: await createLinkToken(),
			onSuccess: async (publicToken: string, metadata: string) => {
				await fetch('/api/exchange_public_token', {
					method: 'POST',
					body: JSON.stringify({ public_token: publicToken }),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				console.log(data.balance);
			},
			onEvent: (eventName: string, metadata: string) => {
				console.log('Event:', eventName);
				console.log('Metadata:', metadata);
			},
			onExit: (error: Error, metadata: string) => {
				console.log(error, metadata);
			}
		});

		// Start Link when button is clicked
		const linkAccountButton = document.getElementById('link-account');
		linkAccountButton?.addEventListener('click', (event) => {
			console.log('yeet');
			handler.open();
		});
	}
</script>

<svelte:head>
	<script
		src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"
		on:load={initPlaid}
	></script>
</svelte:head>
<div class="flex flex-1 items-center justify-center    ">
	<div>
		<div class="mb-24 text-center">
			<h1 class="mb-4 text-xl font-bold leading-tight text-gray-900 md:text-2xl">
				No Cards Connected!
			</h1>
			<p class="mb-5 text-base text-gray-600 md:text-lg">
				You'll need to connect a credit card in order to see recommendations!
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

			<button id="link-account" class="btn">Connect Card</button>
		</div>
	</div>
</div>
