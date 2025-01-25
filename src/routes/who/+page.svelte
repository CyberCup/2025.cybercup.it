<script lang="ts">
	import organizers from '$lib/organizers.json';
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Comitato Organizzatore CyberCup.IT 2025:</h2>
<table
	class="table table-zebra table-pin-rows table-sm border-separate border-spacing-y-2 md:table-lg"
>
	<thead>
		<tr class="bg-primary text-white">
			<th class="text-end">Nome</th>
			<th>Affiliazione</th>
		</tr>
	</thead>
	<tbody>
		{#each organizers as organizer}
			<tr>
				<td class="text-end font-bold">
					{#if organizer.link != null}
						<a href={organizer.link} class="link"> {organizer.name} </a>
					{:else}
						{organizer.name}
					{/if}
				</td>
				<td>{organizer.affiliation}</td>
			</tr>
		{/each}
	</tbody>
</table>
