<script>
	import '../app.postcss';
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col">
	<header>
		<div class="signedInStatus">
			<p class="nojs-show loaded">
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
					{/if}
					<span class="signedInText">
						<small>Signed in as</small><br />
						<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
					</span>
					<a href="/auth/signout" class="button">Sign out</a>
				{:else}
					<span class="notSignedInText">You are not signed in</span>
					<a href="/auth/signin" class="rounded-md bg-blue-600 py-2 px-4 text-slate-200">Sign in</a>
				{/if}
			</p>
		</div>
	</header>
	<slot />
</div>
