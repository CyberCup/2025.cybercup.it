<script lang="ts">
	import Calendar from '$lib/Calendar.svelte';
	import type { PageData } from './[year]/$types';

	let { data }: { data: PageData } = $props();
	let calendar = $derived(data.calendar);
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Calendario CTF CyberCup.IT 2025:</h2>
<Calendar {calendar} />
