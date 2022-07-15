<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import Link from '$components/Link.svelte';
	import Container from '$components/layout/Container.svelte';
	import logo from './godot_logo.svg';
	import Row from './layout/Row.svelte';
	import Column from './layout/Column.svelte';
</script>

<footer>
	<Container>
		<Row>
			<Column>
				<nav>
					<div class="logo">
						<Link href="/">
							<img alt="Godot Logo" src={logo} />
						</Link>
					</div>
					<ul>
						<li>
							<Link href="/features">{$t('nav.features')}</Link>
						</li>
						<li>
							<Link href="/news">{$t('nav.news')}</Link>
						</li>
					</ul>
				</nav>
			</Column>
		</Row>
	</Container>
</footer>

<style>
	footer {
		background: var(--neutral-900);
		min-height: 320px;
		padding: var(--spacing-64) 0;
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
