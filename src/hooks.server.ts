import type { Handle } from '@sveltejs/kit';
import client from '$src/lib/server/prismadb';

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = await client.user.findUnique({
		where: { authToken: session }
	});

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			id: user.id,
			name: user.name,
			phone: user.phone,
			authToken: user.authToken,
			defaultGroupId: user.defaultGroupId
		};
	}

	// load page as normal
	return await resolve(event);
};
