import type { PageLoad } from './$types';
import { rawArticles } from './articles';

export const load: PageLoad = async () => {
	return { articles: rawArticles };
};
