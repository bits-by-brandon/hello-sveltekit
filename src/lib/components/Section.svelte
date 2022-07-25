<script lang="ts">
	import Container from '$components/layout/Container.svelte';
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
		color: var(--text-color);
	}

	section:nth-of-type(2n) {
		background: var(--background-color-alt);
	}
</style>
