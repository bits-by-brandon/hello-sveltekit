import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';
import { SUPPORTED_LANGUAGES } from './src/lib/languageConfig.js';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			entries: SUPPORTED_LANGUAGES.map((language) => `/${language}`).concat(['/'])
		},
		paths: {
			base: dev ? '' : '/hello-sveltekit'
		},
		trailingSlash: 'always',
		vite: {
			plugins: [
				precompileIntl('locales') // if your translations are defined in /locales/[lang].json
			]
		}
	}
};

export default config;
