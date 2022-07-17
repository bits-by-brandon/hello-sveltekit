<script lang="ts">
	import { t, locale } from 'svelte-intl-precompile';
	import { page } from '$app/stores';
	import logo from '$assets/images/godot_logo.svg';
	import Link from '$components/Link.svelte';
	import Container from '$components/layout/Container.svelte';
</script>

<header>
	<Container>
		<div class="outer">
			<nav>
				<div class="logo">
					<Link href="/">
						<img alt="Godot Logo" src={logo} />
					</Link>
				</div>
				<ul>
					<li class:active={$page.url.pathname === `/${$locale}/features/`}>
						<Link href="/features">{$t('nav.features')}</Link>
					</li>
					<li class:active={$page.url.pathname === `/${$locale}/news/`}>
						<Link href="/news">{$t('nav.news')}</Link>
					</li>
				</ul>
			</nav>

			<Link type="button" href="/download">{$t('global.download')}</Link>
		</div>
	</Container>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		background: var(--header-background-color);
		border-bottom: 1px solid var(--header-border-color);
		width: 100%;
		z-index: 10;
	}

	.outer {
		height: 60px;
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
		--spacing: var(--spacing-12);
		content: '';
		position: absolute;
		left: calc(var(--spacing) / -2);
		top: calc(var(--spacing) / -2);
		width: calc(100% + var(--spacing));
		height: calc(100% + var(--spacing));
		background: var(--neutral-600);
		z-index: -1;
	}
</style>
