<script lang="ts">
	import { base } from '$app/paths';
	import type { Scoreboard } from '$lib';

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

							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-1">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
							</svg>
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
