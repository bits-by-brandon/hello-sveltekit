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
        slug,
        title,
        categories[]->{
					title, 
					slug
				},
			}
		 `;
		return this.get<Post>(query, options);
	}

	// async getSiteSettings() {
	// 	const query = `
	//     *[_type == 'siteSettings'][0]{
	//       title,
	//       description,
	//       footer_text,
	//       "og_image": og_image.asset->url,
	//       marquee_override_left,
	//       marquee_override_right,
	//       "save_links": save_links[]{name, url},
	//       "social_links": social_links[]{name, url},
	//     }`;
	// 	return this.get<SiteSettings>(query);
	// }

	// async setSpecimenOwner(specimenId: string, owner: string | null) {
	// 	return this.client.patch(specimenId).set({ 'nft_data.owner': owner }).commit();
	// }
}
