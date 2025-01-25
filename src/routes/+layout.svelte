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

<div class="z-50 absolute inset-x-0 top-0 mb-16 mt-4 w-full px-4 py-0">
	<nav
		class="navbar relative m-0 mx-auto max-h-16 max-w-[80rem] rounded-lg bg-primary p-0 px-8 text-white shadow-xl"
	>
		<div class="mx-auto xl:mx-0">
			<a href="{base}/" class="btn btn-ghost">
				<img src="{base}/logo.png" alt="CyberCup Logo" class="h-full" />
				<span class="text-xl font-bold ml-2">CyberCup.IT</span>
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
			<a href="https://discord.gg/rq3PGpzgqp" class="button-light"> Server Discord </a>
		</div>

		<div class="absolute right-4 ml-auto xl:hidden">
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
			class="mt-4 w-full rounded-lg bg-primary/75 backdrop-blur p-2 text-white shadow-lg md:hidden"
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

<div class="container mx-auto mb-16 mt-32 px-4 max-w-[80rem]">
	{@render children()}
</div>

<div class="mb-4 mt-auto px-4">
	<div class="mx-auto w-full max-w-[80rem] rounded-lg bg-primary px-12 py-8 text-white shadow-xl">
		<div class="mb-8 lg:flex">
			<div class="lg:mr-32 lg:mb-0 mb-8 flex flex-col items-center text-center lg:text-left">
				<p class="flex items-center gap-x-4">
					<img src="{base}/logo.png" alt="CyberCup Logo" class="h-10" />
					<span class="text-2xl font-bold">CyberCup.IT</span>
				</p>
				<p class="mt-4 max-w-48 text-sm">Il primo torneo italiano di Capture The Flag</p>
			</div>

			<div
				class="container text-center lg:text-left grid lg:gap-8 gap-4 md:mx-auto md:text-inherit lg:max-w-[80rem] lg:grid-cols-2 xl:grid-cols-3"
			>
				<div>
					<h4 class="my-1 text-lg font-bold">Contatti</h4>
					<p>
						<a class="link" href="mailto:davide.maiorca@unica.it">davide.maiorca@unica.it</a>
					</p>
				</div>

				<div>
					<h4 class="my-1 text-lg font-bold">Collegamenti</h4>
					<ul>
						<li class="my-1"><a href="{base}/">Home</a></li>
						<li class="my-1"><a href="{base}/scoreboard">Scoreboard</a></li>
						<li class="my-1"><a href="{base}/who">Organizzatori</a></li>
					</ul>
				</div>

				<div>
					<h4 class="my-1 text-lg font-bold">Edizioni precedenti</h4>
					<ul>
						{#each pastEditions as { year }}
							<li class="my-1"><a href="{base}/edition/{year}/">Anno {year}</a></li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="lg:flex text-center lg:text-left justify-between border-t-2 border-white/30 pt-8 text-sm">
			<p>© {new Date().getFullYear()} Cybercup.IT</p>
			<p>Made with ❤️ & SvelteKit</p>
			<p>
				Report issues on
				<a class="link" href="https://github.com/CyberCup/2025.cybercup.it/issues/new"> GitHub </a>
			</p>
		</div>
	</div>
</div>

<style>
</style>
