<div class="flex h-screen flex-col">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn-ghost btn lg:hidden">
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
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
				>
					<li><a href="/events/list">Show All</a></li>
					<li tabindex="0" />
					<li><a href="/events/create">New</a></li>
				</ul>
			</div>
			<a class="btn-ghost btn text-xl normal-case" href="/">Placeholder</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/events/list">Show All</a></li>

				<li><a href="/events/create">New</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a class="btn">Logout</a>
		</div>
	</div>
	<slot />
</div>
