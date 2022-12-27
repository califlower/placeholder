<script lang="ts">
	import { page } from '$app/stores';
	import { PageURLs } from '../Constants';
</script>

<header>
	<div class="mx-auto flex max-w-7xl items-center justify-between p-4">
		<div class="flex items-center">
			<div class="dropdown-right dropdown">
				<div
					tabindex="-1"
					class="btn-ghost btn flex space-x-2  {$page.url.pathname === '/'
						? 'text-white'
						: 'text-slate-700'} md:hidden"
				>
					<svg class="h-6 w-6 hover:opacity-60" fill="currentColor" viewBox="0 0 256 256">
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
				</div>
				<ul
					tabindex="-1"
					class="dropdown-content menu rounded-box absolute mt-3 w-72 bg-base-100 p-2 text-slate-900 shadow-lg"
				>
					<li><a href="/" class="text-xl font-bold leading-tight">Pointlift</a></li>
					<li>
						<a class="flex flex-row" href={PageURLs.DashboardRewards}>
							<p>Dashboard</p>
							<div class="flex w-full flex-1 justify-end">
								<p>›</p>
							</div>
						</a>
					</li>
					<li>
						<a href="/how-it-works" class="flex flex-row">
							<p>How It Works</p>
							<div class="flex flex-1 justify-end">
								<p>›</p>
							</div>
						</a>
					</li>
					<li>
						<a href="/contact" class="flex flex-row">
							<p>Contact</p>
							<div class="flex flex-1 justify-end">
								<p>›</p>
							</div>
						</a>
					</li>
					<li>
						<a href="/about" class="flex flex-row">
							<p>About</p>
							<div class="flex flex-1 justify-end">
								<p>›</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<a href="/">
				<div class="align-center flex items-center space-x-2 ">
					<img class="h-12 w-12" src="/logo.png" alt="pointlift company logo" />
					<h1
						class=" text-xl font-bold leading-tight {$page.url.pathname === '/'
							? 'text-white'
							: 'text-slate-700'}"
					>
						Pointlift
					</h1>
				</div>
			</a>
		</div>
		<nav
			class="{$page.url.pathname === '/'
				? 'text-white'
				: 'text-slate-700'} hidden items-center space-x-5 text-base font-medium md:flex"
			class:text-white={$page.url.pathname === '/'}
		>
			<a
				href={PageURLs.DashboardRewards}
				class:underline={$page.url.pathname.includes('/dashboard')}
				class="rounded  py-2  transition hover:underline hover:opacity-60">Dashboard</a
			>
			<a
				href="/how-it-works"
				class:underline={$page.url.pathname.includes('/how-it-works')}
				class="rounded  py-2  transition hover:underline hover:opacity-60">How It Works</a
			>
			<a
				href="/contact"
				class:underline={$page.url.pathname.includes('/contact')}
				class="rounded py-2  transition hover:underline hover:opacity-60">Contact</a
			>
			<a
				href="/about"
				class:underline={$page.url.pathname.includes('/about')}
				class="rounded  py-2  transition hover:underline hover:opacity-60">About</a
			>
		</nav>
		<nav
			class="flex items-center space-x-1 text-base font-medium {$page.url.pathname === '/'
				? 'text-white'
				: 'text-slate-800'}"
		>
			{#if $page.data.session}
				<div class="dropdown dropdown-end">
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
						class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-slate-900 shadow"
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
					class="inline rounded px-3 py-2 transition hover:underline hover:opacity-60">Login</a
				>
				<a
					href="/auth/signin"
					class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700">Sign Up</a
				>
			{/if}
		</nav>
	</div>
</header>
