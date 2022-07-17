<script>
	export let isActive = false;

	function handleClick() {
		console.log('click');
	}
</script>

<div class="node" on:click={handleClick}>
	<slot />
</div>

<style>
	.node > * {
		fill: #666;
	}
</style>
