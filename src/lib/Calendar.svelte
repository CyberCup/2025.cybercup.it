<script lang="ts">
	import type { Calendar } from '$lib';

	import WebsiteIcon from '~icons/custom/website';
	import WriteupsIcon from '~icons/custom/writeups';
	import CTFTimeIcon from '~icons/custom/ctftime';

	let { calendar }: { calendar: Calendar } = $props();
</script>

<table class="table table-zebra table-lg border-separate border-spacing-y-2">
	<thead>
		<tr class="bg-primary text-white">
			<th>Round</th>
			<th>CTF</th>
			<th>Data</th>
			<th class="text-center">Links</th>
		</tr>
	</thead>
	<tbody>
		{#each calendar as event}
			<tr>
				<td>{event.title}</td>
				<td class="font-semibold"> {event.ctf ?? 'TBA'} </td>
				<td> {event.date ?? 'TBA'} </td>
				<td class="flex space-x-4">
					{#if event.website != null}
						<a
							class="btn"
							aria-label="Sito ufficiale"
							title="Sito ufficiale"
							href={event.website}
							target="_blank"
						>
							<WebsiteIcon />
						</a>
					{/if}
					{#if event.ctftime != null}
						<a
							class="btn"
							href={'https://ctftime.org/event/' + event.ctftime}
							target="_blank"
							aria-label="CTFTime"
							title="CTFTime"
						>
							<CTFTimeIcon />
						</a>
					{/if}

					{#if event.writeups != null}
						<a
							class="btn"
							aria-label="Writeups"
							title="Writeups"
							href={event.website}
							target="_blank"
						>
							<WriteupsIcon />
						</a>
					{:else}
						<a
							class="btn btn-disabled"
							aria-label="Writeups"
							title="Writeups"
							href={event.website}
							target="_blank"
						>
							<WriteupsIcon />
						</a>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
