<script>
	import { t } from 'svelte-intl-precompile';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Column from '$lib/components/layout/Column.svelte';
	import Row from '$lib/components/layout/Row.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
	title={$t('homepage.hero.title', {
		default: "The game engine you've been waiting for"
	})}
	background="url('/tail-quest-defense-screenshot.png')"
>
	<p slot="body">
		{$t('homepage.hero.body', {
			default:
				'Combine powerful tools with full open-source freedom. Build games your way with Godot.'
		})}
	</p>

	<Link slot="footer" type="button" href="/download">
		{$t('global.download_free', { default: 'Download for free' })}
	</Link>
</Hero>

<Section>
	<Row>
		<Column cols="1 / span 2">
			<Heading
				supertext={$t('homepage.powerful_tools.supertext', { default: 'Powerful tools' })}
				title={$t('homepage.powerful_tools.title', { default: 'Rethink how you build games' })}
			>
				<p slot="body">
					{$t('homepage.powerful_tools.body', {
						default: `
						 Godot provides a huge set of common tools, so you can focus on making your game without
						 reinventing the wheel. Godot’s innovative Node and Scene system give you both power and
						 flexibility to create anything.`
					})}
				</p>
			</Heading>
		</Column>
	</Row>
</Section>

<Section>
	<Row>
		<Column cols="3 / span 2">
			<Heading
				supertext="Start designing with nodes"
				title="Build with Nodes: an innovation in game design"
			>
				<p slot="body">
					Godot provides a huge set of common tools, so you can focus on making your game without
					reinventing the wheel. Godot’s innovative Node and Scene system give you both power and
					flexibility to create anything.
				</p>
			</Heading>
		</Column>
	</Row>
</Section>

<Section>
	<h1>homepage</h1>
</Section>

<Section>
	<h1>homepage</h1>
</Section>
