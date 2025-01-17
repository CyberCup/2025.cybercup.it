<script lang="ts">
	import scoreboard from '$lib/scores/scoreboard_2024.json';

	let orderedScores = $derived(scoreboard.toSorted((a, b) => b.score - a.score));
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Calendario CTF CyberCup.IT 2025:</h2>
<table class="table table-zebra table-pin-rows table-lg">
	<thead>
		<tr>
			<th></th>
			<th></th>
			<th>Team</th>
			<th>Affiliazione</th>
			<th>Punteggio</th>
		</tr>
	</thead>
	<tbody>
		{#each orderedScores as team, i}
			{@const gold = i === 0}
			{@const silver = i === 1}
			{@const bronze = i === 2}
			<tr class:gold class:silver class:bronze>
				<td>{i + 1}</td>
				<td class="w-24 p-2"><img src="/logos/{team.logo}" alt={team.team_name} /></td>
				<td>{team.team_name}</td>
				<td>{team.affiliation}</td>
				<td>{team.score}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.gold {
		background-color: #e9d45b !important;
		color: black;
	}

	.silver {
		background-color: #d7d7d7 !important;
		color: black;
	}

	.bronze {
		background-color: #f6993c !important;
		color: black;
	}
</style>
