<script context="module">
	/** @type {import('./__types/[slug]').Load} */
	export async function load({ params }) {
		return {
			status: 200,
			props: {
				slug: params.slug
			}
		};
	}
</script>

<script>
	export let slug;
</script>

<h1>
	{slug}
</h1>
