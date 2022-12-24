<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$components/Header.svelte';
	type Tab = {
		displayName: string;
		ref: string;
		queryParam: string;
	};

	const tabs: Tab[] = [
		{ displayName: 'Stats', ref: '/dashboard/stats', queryParam: 'stats' },
		{ displayName: 'Transactions', ref: '/dashboard/transactions', queryParam: 'transactions' },
		{ displayName: 'Cards', ref: '/dashboard/cards', queryParam: 'transaction' }
	];

	const tabQuery: string = 'currentTab';
	const currentTab: string = $page.url.searchParams.get(tabQuery) || tabs[0].queryParam;
</script>

<div>
	<Header />
	<div class="flex h-screen">
		<div class="drawer-side hidden shadow md:inline">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu w-56 bg-base-100 p-4 text-base-content">
				{#each tabs as tab}
					<li class:underline={$page.url.pathname.includes(tab.ref)}>
						<a href={tab.ref}>{tab.displayName}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="btm-nav md:hidden">
			{#each tabs as tab}
				<button class:active={$page.url.pathname.includes(tab.ref)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/></svg
					>
					<span class="btm-nav-label">{tab.displayName}</span>
				</button>
			{/each}
		</div>
		<slot />
	</div>
</div>
