import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { session } = await parent();
	if (!session?.user) {
		throw redirect(302, '/auth/signin?callbackUrl=/dashboard');
	}

	const getBalance = async function () {
		const response = await fetch('/api/data', {
			method: 'GET'
		});
		const data = await response.json();

		//Render response data
		return data;
	};

	const getStatus = async function () {
		const account = await fetch('/api/plaid/is_account_connected');
		const connected = await account.json();
		if (connected.status == true) {
			return await getBalance();
		}
	};

	return {
		balance: await getStatus()
	};
};
