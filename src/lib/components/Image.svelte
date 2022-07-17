<script lang="ts">
	import IntersectionObserver from './utility/IntersectionObserver.svelte';

	export let src: string;
	export let alt: string;
	export let bordered = false;
	export let animate = false;

	let intersecting = false;
	let imageEl;
</script>

{#if animate}
	<IntersectionObserver element={imageEl} bind:intersecting threshold={1} rootMargin="100px" once>
		<img class="animate" {src} {alt} class:bordered class:intersecting bind:this={imageEl} />
	</IntersectionObserver>
{:else}
	<img class:bordered {src} {alt} />
{/if}

<style lang="scss">
	img {
		display: block;
		width: 100%;
	}

	.bordered {
		border: 2px solid var(--image-border-color);
	}

	.animate {
		opacity: 0;
		transform: translateY(20px);
		transition-delay: 400ms;
		transition: all 300ms cubic-bezier(0, 0, 0, 1);

		&.intersecting {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
