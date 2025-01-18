<script lang="ts">
	import Scoreboard from '$lib/Scoreboard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Classifica CyberCup.IT {data.year}:</h2>
<Scoreboard scoreboard={data.scores} />

<h2 class="mb-4 mt-16 text-center text-3xl font-bold">Tutte le classifiche:</h2>
<div class="flex justify-center gap-x-4">
	{#each data.years as year}
		<a class="btn btn-info" class:btn-active={year === data.year} href="/scoreboard/{year}">
			{year}
		</a>
	{/each}
</div>
