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

export const POST = (async ({ request }) => {
	const data = await request.json();
	const exchangeResponse = await client.itemPublicTokenExchange({
		public_token: data.public_token
	});

	const sessionResult = await getSession(request, authOptions);

	console.log('yeet');
	console.log(sessionResult?.user);
	// FOR DEMO PURPOSES ONLY
	// Store access_token in DB instead of session storage
	//req.session.access_token = exchangeResponse.data.access_token;
	return json(true);
}) satisfies RequestHandler;
