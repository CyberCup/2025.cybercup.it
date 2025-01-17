<script lang="ts">
	const calendar = [
		{
			title: 'Gennaio 2025 (1° Round)',
			ctf: 'Srdnlen CTF',
			date: 'Inizio: 18 Gennaio 2025, 19:00 CET - Fine: 19 Gennaio 2025, 19:00 CEST',
			website: 'https://ctf.srdnlen.it/',
			ctftime: '2576'
		},
		{ title: 'Febbraio 2025 (2° Round)' },
		{ title: 'Marzo 2025 (3° Round)' },
		{ title: 'Aprile 2025 (4° Round)' },
		{ title: 'Maggio 2025 (5° Round)' },
		{ title: 'Giugno 2025 (6° Round)' }
	];
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
			</tr>
		{/each}
	</tbody>
</table>
