<script lang="ts">
	import type { Calendar } from '$lib';

	let { calendar }: { calendar: Calendar } = $props();
</script>

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
