import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Configuration, CountryCode, PlaidApi, PlaidEnvironments, Products } from 'plaid';
import { PLAID_ENV, PLAID_CLIENT_ID, PLAID_SECRET } from '$env/static/private';
import { authOptions } from '$src/hooks.server';
import { getSession } from '@auth/sveltekit';

const config = new Configuration({
	basePath: PlaidEnvironments[PLAID_ENV],
	baseOptions: {
		headers: {
			'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
			'PLAID-SECRET': PLAID_SECRET,
			'Plaid-Version': '2020-09-14'
		}
	}
});
const client = new PlaidApi(config);

export const GET = (async ({ request }) => {
	const sessionResult = await getSession(request, authOptions);
	console.log(sessionResult);

	const tokenResponse = await client.linkTokenCreate({
		user: { client_user_id: '123' },
		client_name: 'Pointlift',
		language: 'en',
		products: [Products.Auth],
		country_codes: [CountryCode.Us],
		redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI
	});
	return json(tokenResponse.data);
}) satisfies RequestHandler;
