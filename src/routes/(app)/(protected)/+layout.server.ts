import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// get `locals.user` and pass it to the `page` store
export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login');
	}
	return {
		user: locals.user
	};
};
