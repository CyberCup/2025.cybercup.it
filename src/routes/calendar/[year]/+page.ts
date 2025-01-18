import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Calendar } from '$lib';

import calendar2025 from '$lib/calendars/2025.json';
import calendar2024 from '$lib/calendars/2024.json';

const YEARS: Record<string, Calendar> = {
	'2025': calendar2025,
	'2024': calendar2024
};

export const load: PageLoad = async ({ params }) => {
	const { year } = params;

	// try loading the scoreboard_{year}.json file
	const calendar = YEARS[year];

	if (!calendar) {
		error(404, `Year ${year} not found`);
	}

	const years = Object.keys(YEARS);

	return { calendar, year, years };
};
