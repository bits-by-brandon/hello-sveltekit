<script context="module">
	import { init, waitLocale } from 'svelte-intl-precompile';
	import { browser, dev } from '$app/env';
	import { DEFAULT_LANGUAGE } from '$lib/languageConfig.js';
	import { registerAll } from '$locales';

	// Hydrate on dev only for hot module replacement
	export const hydrate = dev;
	// Use the browser router for fast page transitions
	export const router = browser;

	// Register all defined languages
	registerAll();

	export async function load({ params }) {
		init({
			fallbackLocale: DEFAULT_LANGUAGE,
			initialLocale: params.lang
		});
		await waitLocale();
		return {};
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
