import type { DefaultUser } from '@auth/core';

declare module '@auth/core' {
	interface Session {
		user?: DefaultUser & {
			id: string;
		};
	}
}
