<script context="module" lang="ts">
	import { init, register, waitLocale } from 'svelte-intl-precompile';
	import { browser, dev } from '$app/env';
	import { DEFAULT_LANGUAGE } from '$lib/languageConfig.js';

	// Hydrate on dev only for hot module replacement
	export const hydrate = dev;
	// Use the browser router for fast page transitions
	export const router = browser;

	// Register all defined languages. This cannot be a loop, because
	// vite needs to statically resolve these files
	register('en', () => import('$locales/en.json'));
	register('es', () => import('$locales/es.json'));

	export async function load({ params }) {
		init({
			fallbackLocale: DEFAULT_LANGUAGE,
			initialLocale: params.lang
		});
		await waitLocale();
		return { props: { lang: params.lang } };
	}
</script>

<script lang="ts">
	import '../../styles/app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
