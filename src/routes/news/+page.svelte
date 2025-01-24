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

<h2 class="mb-8 text-center text-3xl font-bold">News</h2>

<ul>
	{#each articles as article}
		<li>
			<a class="card bg-base-100 shadow-xl" href="{page.url}/{article.path}">
				<div class="card-body">
					<h2 class="card-title">{article.title}</h2>
					<p class="text-sm">{article.date ? new Date(article.date).toLocaleDateString() : ''}</p>

					{article.description}
				</div>
			</a>
		</li>
	{/each}
</ul>
