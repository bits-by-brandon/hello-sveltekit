<script lang="ts">
	import Section from '$components/Section.svelte';
	import Hero from '$components/HomepageHero.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<Section>
	<Hero title="About">
		<p slot="body">about body</p>
	</Hero>
</Section>
