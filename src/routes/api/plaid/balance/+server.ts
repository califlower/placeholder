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

		console.log(result);
		if (result) {
			const access_token = result.sessionToken;
			const balanceResponse = await PlaidCleint.accountsBalanceGet({ access_token });
			return json({
				balance: balanceResponse.data
			});
		}

		return json({ status: 440 });
	}

	return json({ status: 401 });
}) satisfies RequestHandler;
