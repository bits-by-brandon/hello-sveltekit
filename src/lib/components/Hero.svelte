<script>
	import Container from './layout/Container.svelte';
	import Column from './layout/Column.svelte';
	import Row from './layout/Row.svelte';

	export let background = 'var(--background-alt-color)';
	export let supertext;
	export let title;
</script>

<div class="hero" style:background-image={background}>
	<Container>
		<Row>
			<Column cols="1 / span 3">
				<div class="upper">
					{#if supertext}
						<span class="supertext">{supertext}</span>
					{/if}
					{#if title}
						<h1 class="text-xl">{title}</h1>
					{/if}
				</div>
			</Column>
		</Row>
	</Container>

	<Container>
		<Row>
			<Column cols="1 / span 2">
				<div class="lower">
					<div class="stroke" />

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
			</Column>
		</Row>
	</Container>
</div>

<style>
	.hero {
		color: var(--text-color);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--spacing-24);
		width: 100%;
		height: calc(100vh - var(--spacing-32));
		background-size: cover;
		background-position: center;
	}

	.hero:before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--background-color);
		opacity: 0.4;
	}

	.upper {
		position: relative;
	}

	.lower {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
		position: relative;
		padding-left: var(--spacing-24);
	}

	.stroke {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		border-radius: 2px;
		background: var(--section-stroke-color);
	}

	.supertext {
		color: var(--heading-color);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: bold;
	}

	.footer	{
	}
</style>
