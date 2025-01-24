import { Feed } from 'feed';

import { rawArticles } from '../articles';
import type { RequestHandler } from './$types';
import { base } from '$app/paths';

export const GET: RequestHandler = async () => {
	const feed = new Feed({
		title: 'CyberCup News',
		copyright: 'All rights reserved',
		id: 'https://cybercup.it',
		link: 'https://cybercup.it'
	});

	const articles = rawArticles;

	for (const article of articles) {
		feed.addItem({
			title: article.title,
			date: new Date(article.date),
			link: `${base}/news/${article.path}`
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/rss+xml'
		}
	});
};
