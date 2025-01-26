<script lang="ts">
	import type { NewsMetadata } from '$lib';
	import type { Snippet } from 'svelte';

	type Props = NewsMetadata & { children: Snippet<[]> };
	let { children, ...metadata }: Props = $props();

	let readableDate = $derived.by(() => {
		if (metadata.date == null) return '';
		return new Date(metadata.date).toLocaleDateString();
	});
</script>

<article class="prose mx-auto">
	<div>
		<h1 class="mb-2">{metadata.title}</h1>
		<p class="mt-0 opacity-80">
			Pubblicato il <span class="font-bold">{readableDate}</span> da
			<span class="font-bold">{metadata.author}</span>
		</p>
	</div>

	{@render children()}
</article>
