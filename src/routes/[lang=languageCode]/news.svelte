<script lang="ts">
	import Section from '$components/Section.svelte';
	import Hero from '$components/HomepageHero.svelte';
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<Section>
	<Hero title="News">
		<p slot="body">news body</p>
	</Hero>
</Section>
