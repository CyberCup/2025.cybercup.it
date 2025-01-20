import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { editions } from '$lib';

export const load: PageLoad = async ({ params }) => {
	const { year } = params;

	const yearNumber = parseInt(year);
	if (isNaN(yearNumber)) {
		error(404, 'Invalid year');
	}

	const years = editions.map((edition) => edition.year);

	const edition = editions.find((edition) => edition.year === yearNumber);
	if (!edition) {
		error(404, `Year not found`);
	}

	return { edition, years };
};
