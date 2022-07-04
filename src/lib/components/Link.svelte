<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	const lang = $page.params.lang || 'en';

	export let href = '';
	$: stripped_href = href.startsWith('/') ? href.slice(1) : href;
	$: anchor = `${base}/${lang}/${stripped_href}`;
</script>

<a sveltekit:prefetch class={$$props.class} href={anchor}>
	<slot />
</a>
