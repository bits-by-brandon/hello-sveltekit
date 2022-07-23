import SanityProvider from '$lib/providers/sanityProvider';

/**
 * Fetches RSS content from website and injects the content to the
 * homepage. This is for demonstration, not be shipped to prod
 */
export async function get() {
	const sanity = new SanityProvider();

	try {
		const posts = await sanity.getPosts();

		return {
			status: 200,
			body: { posts }
		};
	} catch (e) {
		console.warn('problem fetching rss, returning dummy article content');
		return {
			status: 200,
			body: {
				posts: [
					{ title: 'Article 1', _id: 1 },
					{ title: 'Article 2', _id: 2 },
					{ title: 'Article 3', _id: 3 },
					{ title: 'Article 4', _id: 4 }
				]
			}
		};
	}
}
