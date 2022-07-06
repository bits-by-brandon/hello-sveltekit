<div class="row">
	<slot />
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: var(--spacing-32);
		width: 100%;
	}
</style>
