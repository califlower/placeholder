import client from '$src/lib/server/prismadb';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const phone = data.get('phone') as string;

		let user = await client.user.findUnique({
			where: { phone: phone }
		});

		console.log(user);

		if (!user) {
			const group = await client.group.create({
				data: {
					name: 'Default',
					description: ''
				}
			});
			user = await client.user.create({
				data: {
					phone: phone,
					authToken: crypto.randomUUID(),
					defaultGroupId: group.id
				}
			});

			await client.usersOnGroups.create({
				data: {
					userId: user.id,
					groupId: group.id
				}
			});
		}

		cookies.set('session', user.authToken, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(302, '/events/list');
	}
} satisfies Actions;
