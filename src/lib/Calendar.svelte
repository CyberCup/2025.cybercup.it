<script lang="ts">
	import type { Calendar } from '$lib';

	import WebsiteIcon from '~icons/custom/website';
	import WriteupsIcon from '~icons/custom/writeups';
	import CTFTimeIcon from '~icons/custom/ctftime';

	let { calendar }: { calendar: Calendar } = $props();
</script>

<div class="overflow-x-auto">
	<table class="table-zebra table-lg table border-separate border-spacing-y-2">
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
					<td class="flex flex-col justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
						<a
							class="btn btn-secondary"
							class:btn-disabled={event.website == null}
							aria-label="Sito ufficiale"
							title="Sito ufficiale"
							href={event.website}
							target="_blank"
						>
							<WebsiteIcon />
						</a>
						<a
							class="btn hover:bg-warning hover:text-warning-content bg-[#e3000b]"
							class:btn-disabled={event.ctftime == null}
							href={event.ctftime == null ? null : 'https://ctftime.org/event/' + event.ctftime}
							target="_blank"
							aria-label="CTFTime"
							title="CTFTime"
						>
							<CTFTimeIcon />
						</a>

						<a
							class="btn btn-disabled btn-info"
							class:btn-disabled={event.writeups == null}
							aria-label="Writeups"
							title="Writeups"
							href={event.writeups}
							target="_blank"
						>
							<WriteupsIcon />
						</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
