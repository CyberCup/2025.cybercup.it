<script lang="ts">
	import Scoreboard from '$lib/Scoreboard.svelte';
	import scoreboard from '$lib/scores/scoreboard_2024.json';
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Classifica CyberCup.IT 2024:</h2>
<Scoreboard {scoreboard} />
