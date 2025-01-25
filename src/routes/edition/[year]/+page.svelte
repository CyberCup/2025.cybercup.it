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

<p class="mt-2 text-center text-xl font-light">
	Riassunto del torneo CyberCup.IT {year}
</p>

<h3 class="mt-12 mb-6 text-center text-2xl font-bold">Classifica</h3>
<Scoreboard {scoreboard} />

<h2 class="mt-12 mb-6 text-center text-2xl font-bold">Calendario CTF</h2>
<Calendar {calendar} />

<h2 class="mt-12 mb-6 text-center text-2xl font-bold">Altre edizioni CyberCup.IT:</h2>
<ul class="list-none justify-center space-y-4 max-w-xl mx-auto">
	{#each years.filter(y => y != year) as y}
		<li>
			<a href="{base}/edition/{y}" class="btn btn-primary w-full">Anno {y}</a>
		</li>
	{/each}
</ul>
