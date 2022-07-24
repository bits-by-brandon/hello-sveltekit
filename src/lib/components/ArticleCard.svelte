<script>
	import Snippet from '$components/Snippet.svelte';

	export let title = '';
	export let slug = '';
	export let body = [];
	export let publishedAt = '';
	$: date = new Date(publishedAt).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<a class="article-card" href={slug}>
	<div class="meta">
		{#if date}
			<p class="date text-sm">{date}</p>
		{/if}
	</div>

	{#if title}
		<h3>{title}</h3>
	{/if}

	{#if body}
		<Snippet content={body} />
	{/if}
</a>

<style lang="scss">
	.article-card {
		border: 2px solid var(--text-color);
		color: var(--text-color);
		padding: var(--spacing-24);
		display: flex;
		flex-direction: column;
		transition: transform 100ms ease-in-out;

		&:hover {
			transform: translateY(-4px);
		}
	}

	.meta {
		display: flex;
		flex-direction: row;
	}

	.snippet {
		max-height: 200px;
		display: block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
	}
</style>
