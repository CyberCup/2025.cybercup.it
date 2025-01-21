<script lang="ts">
	import type { Calendar } from '$lib';

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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
								/>
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 1080 1080.09"
								class="size-5"
								fill="currentColor"
							>
								<path d="M1080 .05 0 0l452.43 545.97L0 1080.09l1080-.04" />
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
								/>
							</svg>
						</a>
					{:else}
						<a
							class="btn btn-disabled"
							aria-label="Writeups"
							title="Writeups"
							href={event.website}
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
								/>
							</svg>
						</a>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
