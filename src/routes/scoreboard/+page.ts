import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async () => {
	redirect(307, base + '/scoreboard/2025');
};
