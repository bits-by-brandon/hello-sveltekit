<script lang="ts">
	import { locale } from 'svelte-intl-precompile';
	import { base } from '$app/paths';

	export let href = '';
	export let type: 'button' | 'link' | 'inline' = 'link';
	$: isButton = type === 'button';
	$: isLink = type === 'link';
	$: isInline = type === 'inline';
	$: stripped_href = href.startsWith('/') ? href.slice(1) : href;
	$: anchor = `${base}/${$locale}/${stripped_href}`;
</script>

<a class:isButton class:isLink class:isInline sveltekit:prefetch href={anchor}>
	<slot />
</a>

<style lang="scss">
	.isButton {
		display: inline-block;
		padding: var(--spacing-12) var(--spacing-24);
		color: var(--neutral-100);
		background: var(--button-primary-background);
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		box-shadow: 0 0 8px var(--button-primary-background);
		font-size: var(--text-sm);
		font-weight: bold;
		transition: filter 100ms ease-in-out;

		&:hover {
			text-decoration: none;
			filter: brightness(120%);
		}
	}

	.isInline {
		color: var(--link-primary-color);
	}

	.isLink {
		color: var(--link-primary-color);
	}
</style>
