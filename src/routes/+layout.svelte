<script lang="ts">
	import '../app.css';

	let { children } = $props();

	const menu = [
		{ name: 'Home', path: '/' },
		{ name: 'Organizzatori', path: '/who' },
		{ name: 'Calendario', path: '/calendar' },
		{ name: 'Scoreboard', path: '/scoreboard' }
	];
</script>

<nav class="navbar mb-16 max-h-16 w-full bg-blue px-16 text-white">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost">
			<img src="logo.png" alt="CyberCup Logo" class="h-full" />
			<span class="text-xl font-bold">CyberCup.IT</span>
		</a>
	</div>

	<div class="navbar-end flex items-center gap-4">
		{#each menu as { name, path }}
			<a href={path} class="btn btn-link text-white">
				{name}
			</a>
		{/each}
	</div>
</nav>

<div class="container mx-auto mb-16 max-w-[80rem]">
	{@render children()}
</div>

<div class="w-full bg-slate-200 py-16 text-black">
	<div class="container mx-auto grid max-w-[80rem] grid-cols-2 gap-8">
		<div>
			<h4 class="my-2 text-xl uppercase">Contatti</h4>
			<p>Email: davide.maiorca@unica.it</p>
		</div>
		<div>
			<h4 class="my-2 text-xl uppercase">Collegamenti</h4>
			<ul class="ml-4">
				<li class="my-2"><a href="/">Home</a></li>
				<li class="my-2"><a href="/scoreboard">Scoreboard</a></li>
				<li class="my-2"><a href="/who">Organizzatori</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="flex h-16 w-full items-center justify-center bg-gray-400 text-black">
	<span> © Cybercup.IT 2025</span>
</div>
