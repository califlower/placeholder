<script>
	import '../app.postcss';
	import { page } from '$app/stores';

	let sidebar_open = false;
</script>

<div class="flex h-screen flex-col">
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
				<a href="/dashboard" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
					>Dashboard</a
				>
				<a href="/how-it-works" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
					>How It Works</a
				>
				<a href="/contact" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
					>Contact</a
				>
				<a href="/about" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">About</a>
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
						class="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline"
						>Login</a
					>
					<a
						href="/auth/signin"
						class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700">Sign Up</a
					>
				{/if}
			</nav>
		</div>
	</header>
	<slot />
	<footer>
		<div class="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-4 sm:items-start">
			<nav class="mt-4 flex items-center space-x-3">
				<a href="#" class="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
					><svg class="h-6 w-6" viewBox="0 0 512 512"
						><path
							fill="currentcolor"
							d="M437 152a72 72 0 01-40 12 72 72 0 0032-40 72 72 0 01-45 17 72 72 0 00-122 65 2e2 2e2.0 01-145-74 72 72 0 0022 94 72 72 0 01-32-7 72 72 0 0056 69 72 72 0 01-32 1 72 72 0 0067 50A2e2 2e2.0 0193 368a2e2 2e2.0 00309-179 2e2 2e2.0 0035-37"
						/></svg
					></a
				><a href="#" class="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
					><svg class="h-6 w-6" viewBox="0 0 512 512"
						><path
							d="m427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174"
							fill="currentcolor"
						/><path d="m220 203v106l93-53" fill="#fff" /></svg
					></a
				><a href="#" class="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
					><svg class="h-6 w-6" fill="currentcolor" viewBox="0 0 512 512"
						><circle cx="142" cy="138" r="37" /><path
							stroke="currentcolor"
							stroke-width="66"
							d="M244 194v198M142 194v198"
						/><path
							d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"
						/></svg
					></a
				><a href="#" class="rounded-lg bg-gray-100 p-1 text-gray-500 transition hover:bg-gray-200"
					><svg class="h-6 w-6" fill="currentcolor" viewBox="0 0 512 512"
						><path
							d="m386 137c-24-11-49.5-19-76.3-23.7-.5.0-1 0-1.2.6-3.3 5.9-7 13.5-9.5 19.5-29-4.3-57.5-4.3-85.7.0-2.6-6.2-6.3-13.7-10-19.5-.3-.4-.7-.7-1.2-.6-23 4.6-52.4 13-76 23.7-.2.0-.4.2-.5.4-49 73-62 143-55 213 0 .3.2.7.5 1 32 23.6 63 38 93.6 47.3.5.0 1 0 1.3-.4 7.2-9.8 13.6-20.2 19.2-31.2.3-.6.0-1.4-.7-1.6-10-4-20-8.6-29.3-14-.7-.4-.8-1.5.0-2 2-1.5 4-3 5.8-4.5.3-.3.8-.3 1.2-.2 61.4 28 128 28 188 0 .4-.2.9-.1 1.2.1 1.9 1.6 3.8 3.1 5.8 4.6.7.5.6 1.6.0 2-9.3 5.5-19 10-29.3 14-.7.3-1 1-.6 1.7 5.6 11 12.1 21.3 19 31 .3.4.8.6 1.3.4 30.6-9.5 61.7-23.8 93.8-47.3.3-.2.5-.5.5-1 7.8-80.9-13.1-151-55.4-213 0-.2-.3-.4-.5-.4zM194 308c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38zm125 0c-19 0-34-17-34-38s15-38 34-38 34 17 34 38-15 38-34 38z"
							fill="currentcolor"
						/></svg
					></a
				>
			</nav>
			<nav
				class="mt-6 flex w-full flex-col-reverse items-center justify-between space-y-4 space-y-reverse text-xs font-medium text-gray-500 sm:flex-row sm:space-y-0"
			>
				<p>© 2022, Pointlift. All Rights Reserved.</p>
				<p>
					<a href="/privacy" class="hover:underline">Privacy</a> ·
					<a href="/terms" class="hover:underline">Terms</a>
				</p>
			</nav>
		</div>
	</footer>
</div>
