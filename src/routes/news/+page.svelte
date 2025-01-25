<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { articles: rawArticles } = $derived(data);

	let articles = $derived(rawArticles.filter((article) => article.draft !== true));
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="{page.url}/rss.xml" />
</svelte:head>

<h2 class="mb-12 text-center text-3xl font-bold">News</h2>

<ul class="grid grid-cols-1 gap-4 xl:grid-cols-2">
	{#each articles as article}
		<li>
			<a
				class="card border-2 rounded-lg border-primary/10 bg-primary/10 shadow-xl transition-colors hover:bg-primary/15 hover:shadow-lg"
				href="{page.url}/{article.path}"
			>
				<div class="card-body py-6 px-8">
					<h2 class="card-title">{article.title}</h2>
					{article.description}

					<p class="text-sm opacity-80">
						{article.date
							? new Date(article.date).toLocaleDateString("it-IT", {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})
							: ''}
					</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
