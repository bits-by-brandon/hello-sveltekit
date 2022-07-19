// import Parser from 'rss-parser';

/**
 * Fetches RSS content from website and injects the content to the
 * homepage. This is for demonstration, not be shipped to prod
 */
export async function get() {
	// const url = 'https://godotengine.org/rss.xml';
	// const parser = new Parser();
	try {
		// const feed = await parser.parseURL(url);
		// const articles = feed.items.slice(0, 4);

		return {
			status: 200,
			body: {
				articles: [
					{ title: 'Article 1', guid: 1, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 2', guid: 2, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 3', guid: 3, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 4', guid: 4, contentSnippet: 'Lorium ipsum' }
				]
			}
		};
	} catch (e) {
		console.warn('problem fetching rss, returning dummy article content');
		return {
			status: 200,
			body: {
				articles: [
					{ title: 'Article 1', guid: 1, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 2', guid: 2, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 3', guid: 3, contentSnippet: 'Lorium ipsum' },
					{ title: 'Article 4', guid: 4, contentSnippet: 'Lorium ipsum' }
				]
			}
		};
	}
}
