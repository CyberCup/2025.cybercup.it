import type { PageLoad } from './$types';

import { currentEdition } from '$lib';

export const load: PageLoad = async () => {
	return currentEdition;
};
