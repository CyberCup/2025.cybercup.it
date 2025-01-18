import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Scoreboard } from '$lib';

import scoreboard2024 from '$lib/scoreboards/2024.json';
import scoreboard2025 from '$lib/scoreboards/2025.json';

const YEARS: Record<string, Scoreboard> = {
	'2025': scoreboard2025,
	'2024': scoreboard2024
};

export const load: PageLoad = async ({ params }) => {
	const { year } = params;

	// try loading the scoreboard_{year}.json file
	const scores = YEARS[year];

	if (!scores) {
		error(404, `Year ${year} not found`);
	}

	const years = Object.keys(YEARS);

	return { scores, year, years };
};
