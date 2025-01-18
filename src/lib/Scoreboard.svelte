<script lang="ts">
	type Scoreboard = {
		team_name: string;
		affiliation: string;
		score: number;
		logo: string;
		website?: string;
	}[];

	let { scoreboard }: { scoreboard: Scoreboard } = $props();

	const sortScoreboard = (scoreboard: Scoreboard) =>
		scoreboard.toSorted((a, b) => b.score - a.score);

	let orderedScores = $derived(sortScoreboard(scoreboard));
</script>

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
				<td>
					{#if team.website != null}
						<a href={team.website} class="link">{team.team_name}</a>
					{:else}
						{team.team_name}
					{/if}
				</td>
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
