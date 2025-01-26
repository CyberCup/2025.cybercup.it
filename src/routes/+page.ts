import type { PageLoad } from './$types';
import { rawArticles, type Article } from './news/articles';

function getDesc(article: Article) {
	if (article.description == null) return '';
	const description = article.description;

	if (description.length <= 60) return description;
	return description.slice(0, 60) + '...';
}

export const load: PageLoad = async () => {
	const latestArticles = rawArticles
		.filter((a) => !a.draft)
		.slice(0, 3)
		.map((a) => ({ ...a, description: getDesc(a) }));

	return { latestArticles };
};
