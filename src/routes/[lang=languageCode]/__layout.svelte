<script context="module" lang="ts">
	import { init, register, waitLocale } from 'svelte-intl-precompile';
	import { browser, dev } from '$app/env';
	import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '$lib/languageConfig.js';

	// Hydrate on dev only for hot module replacement
	export const hydrate = dev;
	// Use the browser router for fast page transitions
	export const router = browser;

	// Register all defined languages
	for (const languageCode of SUPPORTED_LANGUAGES) {
		register(languageCode, () => import(`$locales/${languageCode}.json`));
	}

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
