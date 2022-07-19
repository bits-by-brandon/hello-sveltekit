<script>
	export let isActive = false;
	export let x = 0;
	export let y = 0;
	export let activeColor = '#fff';
</script>

<div
	class="node"
	style:color={isActive ? activeColor : '#555'}
	style:left={`${x}px`}
	style:top={`${y}px`}
	class:isActive
	on:click
>
	<slot />
</div>

<style>
	.node {
		position: absolute;
		cursor: pointer;
		transition: color 80ms linear;
	}
</style>
