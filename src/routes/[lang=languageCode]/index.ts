import SanityProvider from '$lib/providers/sanityProvider';

/**
 * Fetches RSS content from website and injects the content to the
 * homepage. This is for demonstration, not be shipped to prod
 */
export async function get() {
	const sanity = new SanityProvider();
	const posts = await sanity.getPosts();
	const sponsors = await sanity.getSponsors();
	return {
		status: 200,
		body: { posts, sponsors }
	};
}
