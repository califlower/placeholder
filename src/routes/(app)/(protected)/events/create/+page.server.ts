import client from '$src/lib/server/prismadb';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const description = data.get('description') as string;
		const date = new Date(data.get('date') as string);

		await client.event.create({
			data: {
				name: name,
				date: date,
				description: description,
				groupsHostingEvent: {
					create: [
						{
							groupId: locals.user.defaultGroupId
						}
					]
				}
			}
		});
	}
} satisfies Actions;
