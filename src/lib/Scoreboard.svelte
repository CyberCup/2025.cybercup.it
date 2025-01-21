<script lang="ts">
	import { base } from '$app/paths';
	import type { Scoreboard } from '$lib';

	import ExternalLinkIcon from '~icons/custom/external';

	let { scoreboard }: { scoreboard: Scoreboard } = $props();

	const sortScoreboard = (scoreboard: Scoreboard) =>
		scoreboard.toSorted((a, b) => b.score - a.score);

	let orderedScores = $derived(sortScoreboard(scoreboard));
</script>

<table class="table table-zebra table-pin-rows table-lg border-separate border-spacing-y-2">
	<thead>
		<tr class="bg-primary text-white">
			<th></th>
			<th></th>
			<th>Team</th>
			<th>Affiliazione</th>
			<th class="text-center">Punteggio</th>
		</tr>
	</thead>
	<tbody>
		{#each orderedScores as team, i}
			{@const gold = i === 0}
			{@const silver = i === 1}
			{@const bronze = i === 2}
			<tr class:gold class:silver class:bronze class="rounded-lg">
				{#if i < 3}
					<td class="px-8 text-2xl font-bold">{i + 1}</td>
				{:else}
					<td class="px-8 text-lg font-semibold">{i + 1}</td>
				{/if}
				<td>
					<img
						src="{base}/logos/{team.logo}"
						class="grid aspect-square h-20 items-center justify-center rounded-lg bg-white object-contain p-2"
						alt={team.team_name}
					/>
				</td>
				<td class="text-lg">
					{#if team.website != null}
						<a href={team.website} class="link flex items-center">
							{team.team_name}

							<ExternalLinkIcon />
						</a>
					{:else}
						{team.team_name}
					{/if}
				</td>
				<td>{team.affiliation}</td>
				<td class="text-center font-semibold">{team.score}</td>
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
