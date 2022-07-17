<script lang="ts">
	export let title = '';
	export let link = '';
	export let contentSnippet = '';
	export let isoDate = '';
	$: date = new Date(isoDate).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<a class="article-card" href={link}>
	<div class="meta">
		{#if date}
			<span class="date text-sm">{date}</span>
		{/if}
	</div>

	{#if title}
		<h3>{title}</h3>
	{/if}

	{#if contentSnippet}
		<p class="snippet">{contentSnippet}</p>
	{/if}
</a>

<style lang="scss">
	.article-card {
		border: 2px solid var(--text-color);
		color: var(--text-color);
		padding: var(--spacing-24);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
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
	}
</style>
