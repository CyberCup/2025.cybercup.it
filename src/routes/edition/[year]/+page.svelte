<script lang="ts">
	import { base } from '$app/paths';
	import Calendar from '$lib/Calendar.svelte';
	import Scoreboard from '$lib/Scoreboard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { edition, years } = $derived(data);
	let { calendar, scoreboard, year } = $derived(edition);
</script>

<h2 class="text-center text-4xl font-bold">
	CyberCup.IT {year}
	<img src="{base}/logo.png" alt="CyberCup Logo" class="ms-4 lg:inline-block hidden h-14" />
</h2>

<p class="mb-16 mt-4 text-center text-xl font-light">
	Riassunto del torneo CyberCup.IT {year}
</p>

<h3 class="mb-4 text-center text-2xl font-bold">Classifica</h3>
<Scoreboard {scoreboard} />

<h2 class="my-8 text-center text-2xl font-bold">Calendario CTF</h2>
<Calendar {calendar} />

<h2 class="my-8 text-center text-2xl font-bold">Altre edizioni CyberCup.IT:</h2>
<ul class="flex list-none justify-center space-x-4">
	{#each years as y}
		<li>
			<a href="{base}/edition/{y}" class="btn btn-primary">{y}</a>
		</li>
	{/each}
</ul>
