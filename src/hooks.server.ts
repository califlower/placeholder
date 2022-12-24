// src/hooks.server.ts

import SvelteKitAuth from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import prisma from './lib/server/prismadb';
import type { Adapter } from '@auth/core/adapters';

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(prisma) as Adapter<boolean>,
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	theme: {
		colorScheme: 'light'
	}
});
