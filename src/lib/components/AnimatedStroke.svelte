<script lang="ts">
	import IntersectionObserver from '$components/utility/IntersectionObserver.svelte';
	export let width = 64;
	let intersecting = false;
	let strokeEl;
</script>

<IntersectionObserver element={strokeEl} bind:intersecting>
	<div class="stroke" style:width={`${width}px`} bind:this={strokeEl} class:intersecting />
</IntersectionObserver>

<style>
	.stroke {
		left: 0;
		top: 0;
		bottom: 0;
		height: var(--stroke-thickness);
		background: var(--section-stroke-color);
		transform-origin: left;
		transition: transform 800ms cubic-bezier(0, 0, 0, 1);
		transition-delay: 400ms;
		transform: scaleX(0);
	}

	.stroke.intersecting {
		transform: scaleX(1);
	}
</style>
