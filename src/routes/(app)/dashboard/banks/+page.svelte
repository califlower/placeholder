<script lang="ts">
	import { browser } from '$app/environment';
	import NoCards from '$components/Dashboard/NoCards.svelte';

	import type { PageData } from '../$types';
	export let data: PageData;

	let handler: any;

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
		handler = Plaid.create({
			token: await createLinkToken(),
			onSuccess: async (publicToken: string, metadata: string) => {
				await fetch('/api/plaid/exchange_public_token', {
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
	}
</script>

{#if browser}
	<script
		src="https://cdn.plaid.com/link/v2/stable/link-initialize.js"
		on:load={initPlaid}
	></script>
{/if}
<NoCards {handler} />
