import type { NewsMetadata } from '$lib';

const modules = import.meta.glob<{ metadata: NewsMetadata }>('./**/+page.svx', { eager: true });

function fixHref(path: string) {
	// ./cybercup-2025/+page.svx -> cybercup-2025
	return path.replace(/\.\/(.+)\/\+page\.svx/, '$1');
}

export type Article = NewsMetadata & { path: string };

export const rawArticles: Article[] = Object.entries(modules).map(([path, article]) => ({
	...article.metadata,
	path: fixHref(path)
}));
