<script lang="ts">
	import { base } from '$app/paths';
	import { language } from '$stores/languageStore';

	export let href = '';
	export let type: 'button' | 'link' | 'inline' = 'link';
	$: isButton = type === 'button';
	$: isLink = type === 'link';
	$: isInline = type === 'inline';
	$: stripped_href = href.startsWith('/') ? href.slice(1) : href;
	$: anchor = `${base}/${$language}/${stripped_href}`;
</script>

<a class:isButton class:isLink class:isInline sveltekit:prefetch href={anchor}>
	<slot />
</a>

<style>
	.isButton {
		display: inline-block;
		padding: 12px 24px;
		color: var(--neutral-100);
		background: var(--button-primary-background);
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		box-shadow: 0 0 8px var(--button-primary-background);
		font-size: var(--text-sm);
		font-weight: bold;
	}

	.isInline {
		color: var(--link-primary-color);
	}

	.isLink {
		color: var(--link-primary-color);
	}
</style>
