<script>
	import Container from './layout/Container.svelte';
</script>

<section>
	<Container>
		<slot />
	</Container>
</section>

<style>
	section {
		background: var(--background-color);
		width: 100%;
		padding: var(--spacing-128) 0;
	}

	section:nth-of-type(2n) {
		background: var(--background-alt-color);
	}
</style>
