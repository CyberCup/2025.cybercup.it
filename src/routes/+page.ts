import type { PageLoad } from './$types';
import { rawArticles } from './news/articles';

export const load: PageLoad = async () => {
	return {
		latestArticles: rawArticles
			.slice(0, 3)
			.map((a) => ({
				...a,
				description: (a.description ?? '').slice(0, 60) + ((a.description ?? '').length > 60 ? '...' : '')
			}))
	};
};
