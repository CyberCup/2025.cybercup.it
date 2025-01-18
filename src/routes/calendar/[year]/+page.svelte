<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let calendar = $derived(data.calendar);
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Calendario CTF CyberCup.IT 2025:</h2>
<table class="table table-zebra table-lg">
	<thead>
		<tr>
			<th>Round</th>
			<th>CTF</th>
			<th>Data</th>
			<th>Sito ufficiale</th>
			<th>CTFTime</th>
			<th>Writeups</th>
		</tr>
	</thead>
	<tbody>
		{#each calendar as event}
			<tr>
				<td>{event.title}</td>
				<td> {event.ctf ?? 'TBA'} </td>
				<td> {event.date ?? 'TBA'} </td>
				<td>
					{#if event.website != null}
						<a class="btn btn-link" href={event.website} target="_blank">Sito ufficiale</a>
					{/if}
				</td>
				<td>
					{#if event.ctftime != null}
						<a
							class="btn btn-link"
							href={'https://ctftime.org/event/' + event.ctftime}
							target="_blank"
						>
							CTFTime
						</a>
					{/if}
				</td>
				<td>
					{#if event.writeups != null}
						<a class="btn btn-link" href={event.writeups} target="_blank">Writeups</a>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<h2 class="mb-4 mt-16 text-center text-3xl font-bold">Tutti i calendari:</h2>
<div class="flex justify-center gap-x-4">
	{#each data.years as year}
		<a class="btn btn-info" class:btn-active={year === data.year} href="/calendar/{year}">
			{year}
		</a>
	{/each}
</div>
