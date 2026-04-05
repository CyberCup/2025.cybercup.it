<script lang="ts">
	import { currentEdition } from '$lib';
	import Calendar from '$lib/Calendar.svelte';

	let { calendar, year } = $derived(currentEdition);
</script>

<svelte:head>
	<title>Calendario | CyberCup.IT</title>
	<meta name="description" content="Calendario delle gare di CyberCup.IT" />
</svelte:head>

<h2 class="mb-12 text-center text-3xl font-bold">Calendario CTF CyberCup.IT {year}:</h2>

<Calendar {calendar} />
