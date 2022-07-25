<script lang="ts">
	import Section from '$components/Section.svelte';
	import ArticleCard from '$components/ArticleCard.svelte';
	import AnimatedStroke from '$components/AnimatedStroke.svelte';

	export let posts: Post[] = [];
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<Section>
	<AnimatedStroke />
	<h1 class="text-lg">News</h1>
	<div class="article-list">
		{#each posts as post (post.slug)}
			<div class="article-item">
				<ArticleCard {...post} />
			</div>
		{/each}
	</div>
</Section>

<style>
	.article-list {
		display: flex;
		gap: var(--spacing-24);
		align-items: stretch;
	}

	.article-item {
		width: 25%;
	}
</style>
