<script lang="ts">
	import { page } from '$app/state';
	import type { NewsMetadata } from '$lib';

	const modules = import.meta.glob<{ metadata: NewsMetadata }>('./**/+page.svx', { eager: true });

	type Article = NewsMetadata & { path: string };
	const rawArticles: Article[] = Object.entries(modules).map(([path, article]) => ({
		...article.metadata,
		path
	}));

	let articles = rawArticles.filter((article) => article.draft !== true);


	function fixHref(path: string) {
		// ./cybercup-2025/+page.svx -> cybercup-2025
		return path.replace(/\.\/(.+)\/\+page\.svx/, '$1');
	}
</script>

<h2 class="mb-8 text-center text-3xl font-bold">News</h2>

<ul>
	{#each articles as article}
		<li>
			<a class="card bg-base-100 shadow-xl" href="{page.url}/{fixHref(article.path)}">
				<div class="card-body">
					<h2 class="card-title">{article.title}</h2>

					{article.description}
				</div>
			</a>
		</li>
	{/each}
</ul>
