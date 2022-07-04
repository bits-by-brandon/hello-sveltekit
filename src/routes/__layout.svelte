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
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
