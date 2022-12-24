import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocess({ postcss: true })],

	kit: {
		adapter: adapter(),

				alias: {
                    // these are the aliases and paths to them
					'$components/*': './src/lib/components',
					'$src/*': './src',
					'$utils/*': './src/lib/utils'
				}
	}
};

export default config;
