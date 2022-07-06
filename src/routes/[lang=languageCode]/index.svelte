<script>
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Column from '$lib/components/layout/Column.svelte';
	import Row from '$lib/components/layout/Row.svelte';
	import Link from '../../lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
	title="The game engine you've been waiting for."
	background="url('/tail-quest-defense-screenshot.png')"
>
	<p slot="body">
		Combine powerful tools with full open-source freedom. Build games your way with Godot.
	</p>

	<Link slot="footer" type="button" href="/download">Download for free</Link>
</Hero>

<Section>
	<Row>
		<Column cols="1 / span 2">
			<Heading supertext="Powerful tools" title="Rethink how you build games">
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
