<script lang="ts">
	import Scoreboard from '$lib/Scoreboard.svelte';
	import scoreboard from '$lib/scores/scoreboard_2025.json';
</script>

<h2 class="mb-4 text-center text-3xl font-bold">Classifica CyberCup.IT 2025:</h2>
<Scoreboard {scoreboard} />

<div class="divider"></div>

<h2 class="mb-4 text-center text-3xl font-bold">Classifiche di anni passati:</h2>
<ul class="menu btn-lg menu-horizontal">
	{#each [2024] as year}
		<li><a class="" href="/scoreboard/{year}">{year}</a></li>
	{/each}
</ul>
