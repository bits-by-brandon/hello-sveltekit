<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { DEFAULT_LANGUAGE } from '../languageConfig.js';

	const lang = $page.params.lang || DEFAULT_LANGUAGE;

	export let href = '';
	$: stripped_href = href.startsWith('/') ? href.slice(1) : href;
	$: anchor = `${base}/${lang}/${stripped_href}`;
</script>

<a sveltekit:prefetch class={$$props.class} href={anchor}>
	<slot />
</a>
