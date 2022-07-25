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
		border-bottom: 1px dashed var(--blue-700);
	}
</style>
