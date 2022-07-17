<script lang="ts">
	import IntersectionObserver from '../utility/IntersectionObserver.svelte';
	import NodeFrame from './NodeFrame.svelte';

	let isIntersecting = false;
	let containerEl;
</script>

<IntersectionObserver element={containerEl} bind:isIntersecting threshold={1} rootMargin="100px">
	<div class="interactiveEditor" class:isIntersecting bind:this={containerEl}>
		<svg
			width="591"
			height="376"
			viewBox="0 0 591 376"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect class="frame" x="1" y="1" width="589" height="374" stroke="white" stroke-width="2" />
			<path class="node-panel" d="M15 15H79V27H114V246H15V15Z" stroke="white" stroke-width="2" />
			<rect
				class="resource-panel"
				x="15"
				y="260"
				width="99"
				height="101"
				stroke="white"
				stroke-width="2"
			/>
			<path
				class="preview-panel"
				d="M128 15H192.5V27.5H576V361H128V15Z"
				stroke="white"
				stroke-width="2"
			/>
		</svg>

		<NodeFrame {isIntersecting} />
	</div>
</IntersectionObserver>

<style lang="scss">
	.interactiveEditor {
		position: relative;
	}

	.frame,
	.node-panel,
	.resource-panel,
	.preview-panel {
		transition: stroke-dashoffset 1000ms cubic-bezier(0.48, -0.02, 0.24, 1.03);
	}

	.frame {
		stroke-dasharray: 1928px;
		stroke-dashoffset: 1928px;
	}
	.node-panel {
		stroke-dasharray: 662px;
		stroke-dashoffset: 662px;
		transition-delay: 200ms;
	}
	.resource-panel {
		stroke-dasharray: 400px;
		stroke-dashoffset: 400px;
		transition-delay: 400ms;
	}
	.preview-panel {
		stroke-dashoffset: 1590px;
		stroke-dasharray: 1590px;
		transition-delay: 400ms;
	}

	.isIntersecting {
		.frame,
		.node-panel,
		.resource-panel,
		.preview-panel {
			stroke-dashoffset: 0;
		}
	}
</style>
