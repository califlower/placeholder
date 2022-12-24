<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="mx-auto flex max-w-7xl items-center justify-between p-4">
		<div class="flex items-center space-x-2">
			<button class="flex appearance-none p-1 text-gray-500 md:hidden">
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 256 256">
					<line
						x1="40"
						y1="128"
						x2="216"
						y2="128"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					/>
					<line
						x1="40"
						y1="64"
						x2="216"
						y2="64"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					/>
					<line
						x1="40"
						y1="192"
						x2="216"
						y2="192"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="24"
					/>
				</svg>
			</button>
			<a href="/">
				<div class="align-center flex items-center space-x-2 ">
					<img class="h-12 w-12 md:h-16 md:w-16" src="/logo.png" alt="pointlift company logo" />
					<h1 class=" text-xl font-bold leading-tight text-gray-900 md:text-2xl">Pointlift</h1>
				</div>
			</a>
		</div>
		<nav class="hidden items-center space-x-2 text-sm font-medium text-gray-800 md:flex">
			<a
				href="/dashboard/stats"
				class:underline={$page.url.pathname.includes('/dashboard')}
				class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">Dashboard</a
			>
			<a
				href="/how-it-works"
				class:underline={$page.url.pathname.includes('/how-it-works')}
				class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">How It Works</a
			>
			<a
				href="/contact"
				class:underline={$page.url.pathname.includes('/contact')}
				class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">Contact</a
			>
			<a
				href="/about"
				class:underline={$page.url.pathname.includes('/about')}
				class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">About</a
			>
		</nav>

		<nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
			{#if $page.data.session}
				<div class="dropdown-end dropdown">
					<div tabindex="-1" class="btn-ghost btn flex space-x-2">
						<div class="flex flex-col">
							<small>Signed in as</small>
							<small>{$page.data.session.user?.email ?? $page.data.session.user?.name}</small>
						</div>
						<div>
							<strong>▼</strong>
						</div>
					</div>
					<ul
						tabindex="-1"
						class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
					>
						<li>
							<a href="/user/profile" class="justify-between"> Profile </a>
						</li>
						<li><a href="/user/settings">Settings</a></li>
						<li><a href="/auth/signout?callbackUrl=//">Logout</a></li>
					</ul>
				</div>
			{:else}
				<a
					href="/auth/signin"
					class="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline">Login</a
				>
				<a
					href="/auth/signin"
					class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700">Sign Up</a
				>
			{/if}
		</nav>
	</div>
</header>
