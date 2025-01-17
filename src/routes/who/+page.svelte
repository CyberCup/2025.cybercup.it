<script lang="ts">
	import organizers from '$lib/organizers.json';
</script>

<h2 class="mb-8 text-center text-3xl font-bold">Comitato Organizzatore CyberCup.IT 2025:</h2>
<table class="table table-zebra">
	<thead>
		<tr>
			<th>Nome</th>
			<th>Affiliazione</th>
		</tr>
	</thead>
	<tbody>
		{#each organizers as organizer}
			<tr>
				<td>{organizer.name}</td>
				<td>{organizer.affiliation}</td>
			</tr>
		{/each}
	</tbody>
</table>
