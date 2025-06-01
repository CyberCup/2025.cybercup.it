<script lang="ts">
	import Scoreboard from '$lib/Scoreboard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Classifica | CyberCup.IT</title>
	<meta name="description" content="Classifica del torneo di Capture The Flag CyberCup.IT" />
</svelte:head>

<h2 class="mb-12 text-center text-3xl font-bold">Classifica CyberCup.IT {data.year}:</h2>
<Scoreboard scoreboard={data.scoreboard.filter((d) => !d.junior)} />

<h2 class="my-12 text-center text-3xl font-bold">Classifica Junior CyberCup.IT {data.year}:</h2>
<Scoreboard scoreboard={data.scoreboard.filter((d) => d.junior)} />
