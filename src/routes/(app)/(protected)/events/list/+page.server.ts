import type { PageServerLoad } from './$types';
import client from '$lib/server/prismadb';

export const load = (async ({ locals }) => {
	return {
		events: await client.event.findMany({
			where: {
				groupsHostingEvent: {
					some: {
						groupId: locals.user.defaultGroupId
					}
				}
			}
		})
	};
}) satisfies PageServerLoad;
