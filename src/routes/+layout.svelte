<script lang="ts">
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { editions } from '$lib';

	import MenuIcon from '~icons/heroicons/bars-3-16-solid';
	import '../app.css';

	let { children } = $props();

	let pastEditions = editions.filter((edition) => edition.year < new Date().getFullYear());

	let editionsMenuOpen = $state(false);

	const MENU = [
		{ name: 'News', path: 'news' },
		{ name: 'Organizzatori', path: 'who' },
		{ name: 'Calendario', path: 'calendar' },
		{ name: 'Scoreboard', path: 'scoreboard' },
		{ name: 'Iscriviti', path: 'register' }
	];

	let mobileMenuOpen = $state(false);
</script>

<div class="mb-16 mt-4 w-full py-0 px-4">
	<nav class="navbar max-w-[80rem] rounded-lg shadow-xl relative mx-auto m-0 max-h-16 bg-primary p-0 px-8 text-white">
		<div class="xl:mx-0 mx-auto">
			<a href="{base}/" class="btn btn-ghost">
				<img src="{base}/logo.png" alt="CyberCup Logo" class="h-full" />
				<span class="text-xl font-bold">CyberCup.IT</span>
			</a>
		</div>

		<div class="ml-auto hidden items-center gap-4 xl:flex">
			<ul class="menu menu-horizontal">
				{#each MENU as { name, path }}
					<li>
						<a href="{base}/{path}" class="text-white">
							{name}
						</a>
					</li>
				{/each}

				<li>
					<details bind:this={editionsMenu}>
						<summary>Edizioni</summary>
						<ul class="rounded-t-none p-2">
							{#each pastEditions as { year }}
								<li>
									<a
										href="{base}/edition/{year}"
										class="text-base-content"
										onclick={() => (editionsMenu.open = false)}
									>
										{year}
									</a>
								</li>
							{/each}
						</ul>
					</details>
				</li>
			</ul>
		</div>

		<div class="navbar-env hidden xl:block">
			<a
				href="https://discord.gg/rq3PGpzgqp"
				class="button-light"
			>
				Server Discord
			</a>
		</div>

		<div class="ml-auto xl:hidden absolute right-4">
			<button
				class="btn btn-square btn-ghost text-2xl text-white"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Menu"
			>
				<MenuIcon />
			</button>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<div
			transition:slide
			class="w-full bg-primary/75 rounded-lg mt-4 shadow-lg p-2 text-white md:hidden"
			id="mobile-menu"
		>
			<ul class="menu menu-lg">
				{#each MENU as { name, path }}
					<li>
						<a href="{base}/{path}" onclick={() => (mobileMenuOpen = false)}>
							{name}
						</a>
					</li>
				{/each}
				<li>
					<details bind:open={editionsMenuOpen}>
						<summary>Edizioni</summary>
						<ul>
							{#each pastEditions as { year }}
								<li>
									<a href="{base}/edition/{year}" onclick={() => (editionsMenuOpen = false)}>
										{year}
									</a>
								</li>
							{/each}
						</ul>
					</details>
				</li>
			</ul>
		</div>
	{/if}
</div>

<div class="container mx-auto mb-16 max-w-[80rem]">
	{@render children()}
</div>

<div class="w-full bg-slate-200 px-16 py-16 mt-auto text-black">
	<div class="container mx-8 grid gap-8 md:mx-auto md:grid-cols-2 md:text-inherit lg:max-w-[80rem]">
		<div class="mb-8">
			<h4 class="my-2 text-xl uppercase">Contatti</h4>
			<p>
				Email: <a class="link" href="mailto:davide.maiorca@unica.it">davide.maiorca@unica.it</a>
			</p>
		</div>
		<div>
			<h4 class="my-2 text-xl uppercase">Collegamenti</h4>
			<ul class="md:ml-4">
				<li class="my-2"><a href="{base}/">Home</a></li>
				<li class="my-2"><a href="{base}/scoreboard">Scoreboard</a></li>
				<li class="my-2"><a href="{base}/who">Organizzatori</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="flex w-full flex-col items-center justify-center gap-4 bg-gray-400 py-4 text-black">
	<p>Made with ❤️ & SvelteKit</p>
	<p>
		Report issues on
		<a class="link" href="https://github.com/CyberCup/2025.cybercup.it/issues/new"> GitHub </a>
	</p>
	<p>© Cybercup.IT 2025</p>
</div>

<style>
</style>
