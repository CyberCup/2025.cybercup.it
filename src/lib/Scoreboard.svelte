<script lang="ts">
	import { base } from '$app/paths';
	import type { Scoreboard } from '$lib';

	import ExternalLinkIcon from '~icons/custom/external';

	let { scoreboard }: { scoreboard: Scoreboard } = $props();

	const sortScoreboard = (scoreboard: Scoreboard) =>
		scoreboard.toSorted((a, b) => b.score - a.score);

	let orderedScores = $derived(sortScoreboard(scoreboard));

	function posStyle(i: number) {
		if (i < 3) {
			return `text-${4 - i}xl font-bold`;
		} else if (i === 3) {
			return 'text-xl font-semibold';
		} else {
			return 'text-lg font-semibold';
		}
	}
</script>

<div class="overflow-x-auto">
	<table
		class="table table-zebra table-pin-rows table-sm border-separate border-spacing-y-2 md:table-lg"
	>
		<thead>
			<tr class="bg-primary text-white">
				<th></th>
				<th>Team</th>
				<th>Affiliazione</th>
				<th class="text-center">Punteggio</th>
			</tr>
		</thead>
		<tbody>
			{#if orderedScores.length === 0}
				<tr>
					<td colspan="5" class="text-center">Nessun punteggio disponibile</td>
				</tr>
			{/if}

			{#each orderedScores as team, i}
				{@const pos = i + 1}

				{@const gold = pos === 1}
				{@const silver = pos === 2}
				{@const bronze = pos === 3}

				<tr class:gold class:silver class:bronze class="rounded-lg">
					<td class="{posStyle(pos)} md:px-8">
						{pos}
					</td>

					<td class="flex items-center md:text-lg">
						<img
							src="{base}/logos/{team.logo}"
							class="mr-10 aspect-square h-20 items-center justify-center rounded-lg bg-white object-contain p-2 max-sm:hidden sm:grid"
							alt={team.team_name}
						/>

						{#if team.website != null}
							<a href={team.website} class="link flex items-center">
								<span>{team.team_name}</span>
								<ExternalLinkIcon class="ml-1" />
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
</div>

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
