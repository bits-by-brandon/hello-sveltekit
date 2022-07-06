<script context="module">
	import { init, register, waitLocale } from 'svelte-intl-precompile';
	import { browser, dev } from '$app/env';

	// Hydrate on dev only for hot module replacement
	export const hydrate = dev;
	// Use the browser router for fast page transitions
	export const router = browser;

	register('en', () => import('$locales/en.json'));
	register('es', () => import('$locales/es.json'));

	export async function load({ params }) {
		init({
			fallbackLocale: 'en',
			initialLocale: params.lang
		});
		await waitLocale();
		return { props: { lang: params.lang } };
	}
</script>

<script lang="ts">
	import '../../styles/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
