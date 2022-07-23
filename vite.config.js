import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	envDir: resolve('.'),
	plugins: [
		sveltekit(),
		precompileIntl('locales') // if your translations are defined in /locales/[lang].json
	],
	resolve: {
		alias: {
			$components: resolve('./src/lib/components'),
			$stores: resolve('./src/lib/stores'),
			$styles: resolve('./src/styles'),
			$assets: resolve('./src/assets')
		}
	}
};

export default config;
