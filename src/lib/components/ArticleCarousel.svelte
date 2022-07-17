<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';
	import Carousel from './Carousel.svelte';

	export let supertext = '';
	export let title = '';
	export let articles = [];
</script>

<Carousel {supertext} {title}>
	{#each articles as article (article.guid)}
		<ArticleCard {...article} />
	{/each}
</Carousel>
