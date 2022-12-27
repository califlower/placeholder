import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Configuration, CountryCode, PlaidApi, PlaidEnvironments, Products } from 'plaid';
import { PLAID_ENV, PLAID_CLIENT_ID, PLAID_SECRET } from '$env/static/private';
import { authOptions } from '$src/hooks.server';
import { getSession } from '@auth/sveltekit';
import PlaidCleint from '$src/lib/server/plaid';

export const GET = (async ({ request }) => {
	const sessionResult = await getSession(request, authOptions);

	if (sessionResult && sessionResult.user) {
		const tokenResponse = await PlaidCleint.linkTokenCreate({
			user: { client_user_id: PLAID_CLIENT_ID },
			client_name: 'Pointlift',
			language: 'en',
			products: [Products.Auth],
			country_codes: [CountryCode.Us],
			redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI
		});

		return json(tokenResponse.data);
	}
	return json({ status: 401 });
}) satisfies RequestHandler;
