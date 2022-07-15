<script>
	export let supertext;
	export let title;
</script>

<div class="heading">
	<div class="stroke" />
	<div class="upper">
		{#if supertext}
			<span class="supertext">{supertext}</span>
		{/if}
		{#if title}
			<h2 class="title">{title}</h2>
		{/if}
	</div>

	{#if $$slots.body}
		<div class="body">
			<slot name="body" />
		</div>
	{/if}

	{#if $$slots.footer}
		<div class="footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style>
	.heading {
		color: var(--text-color);
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
	}

	.upper {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		position: relative;
	}

	.stroke {
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--spacing-64);
		height: var(--stroke-thickness);
		background: var(--section-stroke-color);
	}

	.supertext {
		color: var(--heading-color);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: bold;
	}

	.title {
		font-size: var(--text-lg);
	}
</style>
