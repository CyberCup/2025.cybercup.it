<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { editions } from '$lib';

	import '../app.css';

	let { children } = $props();

	let pastEditions = editions.filter((edition) => edition.year < new Date().getFullYear());

	let editionsMenu: HTMLDetailsElement;

	const MENU = [
		{ name: 'Home', path: '' },
		{ name: 'Organizzatori', path: 'who' },
		{ name: 'Calendario', path: 'calendar' },
		{ name: 'Scoreboard', path: 'scoreboard' },
		{ name: 'Iscriviti', path: 'register' }
	];

	let mobileMenuOpen = $state(false);
</script>

<div class="mb-16 w-full bg-primary p-0 px-16">
	<nav class="navbar m-0 max-h-16 p-0 text-white">
		<div class="navbar-center flex md:navbar-start">
			<a href="{base}/" class="btn btn-ghost">
				<img src="{base}/logo.png" alt="CyberCup Logo" class="h-full" />
				<span class="text-xl font-bold">CyberCup.IT</span>
			</a>
		</div>

		<div class="navbar-end hidden items-center gap-4 md:flex">
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
						<ul class="rounded-t-none bg-base-100 p-2">
							{#each pastEditions as { year }}
								<li>
									<a
										href="{base}/edition/{year}"
										class="text-white"
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

			<a href="https://discord.gg/rq3PGpzgqp" class="btn bg-white text-black hover:bg-gray-400">
				Server Discord
			</a>
		</div>

		<div class="navbar-end md:hidden">
			<button
				class="btn btn-square btn-outline"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<div transition:slide class="mt-4 flex flex-col justify-center text-center" id="mobile-menu">
			{#each MENU as { name, path }}
				<button
					class="btn btn-link block text-white md:hidden"
					onclick={() => {
						mobileMenuOpen = false;
						goto(base + '/' + path);
					}}
				>
					{name}
				</button>
			{/each}
		</div>
	{/if}
</div>

<div class="container mx-auto mb-16 max-w-[80rem]">
	{@render children()}
</div>

<div class="w-full bg-slate-200 px-16 py-16 text-black">
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
	<p>Made with ❤️ & SvelteKit </p>
	<p> Report issues on <a class="link" href="https://github.com/CyberCup/2025.cybercup.it/issues/new"> GitHub </a></p>
	<p>© Cybercup.IT 2025</p>
</div>

<style>
</style>
