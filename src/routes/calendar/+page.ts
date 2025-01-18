import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	redirect(307, '/calendar/2025');
};