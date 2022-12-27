import { PLAID_CLIENT_ID, PLAID_ENV, PLAID_SECRET } from '$env/static/private';
import { Configuration, CountryCode, PlaidApi, PlaidEnvironments, Products } from 'plaid';

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

const PlaidCleint = new PlaidApi(config);

export default PlaidCleint;
