<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { articles: rawArticles } = $derived(data);

	let articles = $derived(rawArticles.filter((article) => article.draft !== true));

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('it-IT', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>News | CyberCup.IT</title>
	<meta name="description" content="Ultime notizie sul torneo di Capture The Flag CyberCup.IT" />
	<link rel="alternate" type="application/rss+xml" title="RSS Feed" href="{page.url}/rss.xml" />
</svelte:head>

<h2 class="mb-12 text-center text-3xl font-bold">News</h2>

<ul class="grid grid-cols-1 gap-4 xl:grid-cols-2">
	{#each articles as article}
		<li>
			<a
				class="card border-primary/10 bg-primary/10 hover:bg-primary/15 rounded-lg border-2 shadow-xl transition-colors hover:shadow-lg"
				href="{page.url}/{article.path}"
			>
				<div class="card-body px-8 py-6">
					<h2 class="card-title">{article.title}</h2>
					{article.description}

					<p class="text-sm opacity-80">
						{article.date != null ? formatDate(article.date) : ''}
					</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
