import type { SanityClient } from '@sanity/client';
import sanityClient from '@sanity/client';

export default class SanityProvider {
	private client: SanityClient;

	constructor() {
		this.client = sanityClient({
			projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
			dataset: import.meta.env.VITE_SANITY_DATASET,
			apiVersion: '2022-07-23',
			useCdn: true
		});
	}

	async get<T>(query: string, params: { [key: string]: any } = {}) {
		return this.client.fetch<T>(query, params);
	}

	async getPosts(options: { start: number; end: number } = { start: 0, end: 25 }) {
		const query = `
			*[_type == 'post'] | order(publishedAt desc) [$start...$end] {
        body,
        mainImage,
        publishedAt,
        title,
        "slug": slug.current,
        categories[]->{
					title, 
					slug
				},
			}
		 `;
		return this.get<Post>(query, options);
	}

	async getSponsors() {
		const query = `
	    *[_type == 'sponsor']{
	      name,
	      level,
	      "logo": logo.asset->url,
	    }`;
		return this.get<Sponsor[]>(query);
	}

	/**
	 * Takes portabletext content and returns plaintext
	 * @see https://www.sanity.io/docs/presenting-block-text
	 */
	static toPlainText(blocks = []) {
		return (
			blocks
				// loop through each block
				.map((block) => {
					// if it's not a text block with children,
					// return nothing
					if (block._type !== 'block' || !block.children) {
						return '';
					}
					// loop through the children spans, and join the
					// text strings
					return block.children.map((child) => child.text).join('');
				})
				// join the paragraphs leaving split by two linebreaks
				.join('\n\n')
		);
	}
}
