import { authOptions } from '$src/hooks.server';
import PlaidCleint from '$src/lib/server/plaid';
import { getSession } from '@auth/sveltekit';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ request }) => {
	const sessionResult = await getSession(request, authOptions);
	if (sessionResult && sessionResult.user) {
		const result = await prisma.plaidSession.findFirst({
			where: {
				userId: sessionResult.user.id
			}
		});

		if (result) {
			const access_token = result.sessionToken;
			const balanceResponse = await PlaidCleint.transactionsGet({
				access_token,
				start_date: '2020-01-01',
				end_date: '2022-02-01'
			});
			return json({
				balance: balanceResponse.data
			});
		}

		return json({ status: 440 });
	}

	return json({ status: 401 });
}) satisfies RequestHandler;
