import Parser from 'rss-parser';

/**
 * Fetches RSS content from website and injects the content to the
 * homepage. This is for demonstration, not be shipped to prod
 */
export async function get() {
	const url = 'https://godotengine.org/rss.xml';
	const parser = new Parser();
	const feed = await parser.parseURL(url);
	const articles = feed.items.slice(0, 4);

	return {
		status: 200,
		body: { articles }
	};
}
