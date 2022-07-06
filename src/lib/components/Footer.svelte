<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import { page } from '$app/stores';
	import { language } from '$lib/stores/languageStore.ts';
	import Link from '$lib/components/Link.svelte';
	import logo from './godot_logo.svg';
</script>

<footer>
	<nav>
		<div class="logo">
			<Link href="/">
				<img alt="Godot Logo" src={logo} />
			</Link>
		</div>
		<ul>
			<li class:active={$page.url.pathname === `/${$language}/features/`}>
				<Link href="/features">{$t('nav.features')}</Link>
			</li>
			<li class:active={$page.url.pathname === `/${$language}/news/`}>
				<Link href="/news">{$t('nav.news')}</Link>
			</li>
		</ul>
	</nav>

	<div>
		<Link type="button" href="/download">Download</Link>
	</div>
</footer>

<style>
	footer {
		background: var(--neutral-900);
		height: 320px;
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column-width);
		--background: rgba(255, 255, 255, 0.7);
	}

	.logo {
		margin-right: var(--spacing-64);
		height: 38px;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		gap: var(--spacing-16);
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
	}

	li.active:before {
		--spacing: --spacing-8;
		content: '';
		position: absolute;
		left: calc(var(--spacing-8) / -2);
		top: calc(var(--spacing-8) / -2);
		width: calc(100% + var(--spacing-8));
		height: calc(100% + var(--spacing-8));
		background: var(--accent-color);
		z-index: -1;
	}
</style>
