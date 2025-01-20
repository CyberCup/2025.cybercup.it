<script lang="ts">
	import Scoreboard from '$lib/Scoreboard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Classifica CyberCup.IT {data.year}:</h2>
<Scoreboard scoreboard={data.scoreboard} />

