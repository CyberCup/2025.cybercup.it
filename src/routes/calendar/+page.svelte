<script lang="ts">
	import Calendar from '$lib/Calendar.svelte';
	import Alert from '$lib/components/Alert.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let calendar = $derived(data.calendar);
</script>

<svelte:head>
	<title>Calendario | CyberCup.IT</title>
	<meta name="description" content="Calendario delle gare di CyberCup.IT" />
</svelte:head>

<h2 class="mb-6 text-center text-3xl font-bold">Calendario CTF CyberCup.IT 2025:</h2>

<Alert class="mx-auto max-w-max mb-6" type="warning">
	<p>Il calendario è in fase di definizione. Le date potrebbero subire variazioni.</p>
</Alert>

<Calendar {calendar} />
