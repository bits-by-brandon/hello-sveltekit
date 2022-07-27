<script lang="ts">
	export let sponsors = [];
</script>

<div class="sponsors">
	<h2>Sponsors</h2>
	{#each sponsors as sponsor}
		<div class="sponsor">
			<img src={sponsor.logo} alt={sponsor.name} />
		</div>
	{/each}
</div>

<style>
	.sponsors {
		display: block;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.sponsor {
		width: 25%;
		background: var(--blue-700);
		padding: var(--spacing-12);
	}
	img {
		width: 100%;
		height: 100%;
	}
</style>
