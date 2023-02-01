import client from '$src/lib/server/prismadb';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const description = data.get('description') as string;
		const date = new Date(data.get('date') as string);

		await client.event.create({
			data: {
				name: name,
				date: date,
				description: description
			}
		});
	}
} satisfies Actions;
