import DirectusProvider from '$lib/providers/directusProvider';

/**
 * Fetches RSS content from website and injects the content to the
 * homepage. This is for demonstration, not be shipped to prod
 */
export async function GET() {
	const database = new DirectusProvider();
	const posts = await database.getPosts();
	return {
		status: 200,
		body: { posts }
	};
}
