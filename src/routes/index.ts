import parser from 'accept-language-parser';
import { base } from '$app/paths';
import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '$lib/languageConfig.js';

export function get({ request }: RequestEvent): RequestHandlerOutput {
	const languageHeader = request.headers.get('Accept-Language');
	// Default to english if no redirect headers provided
	let redirectLanguage = DEFAULT_LANGUAGE;

	if (languageHeader) {
		// Try match requested language to a translated language
		redirectLanguage = parser.pick(SUPPORTED_LANGUAGES, languageHeader) || DEFAULT_LANGUAGE;
	}

	// Redirect to the default (english) homepage url
	return {
		status: 301,
		headers: { location: `${base}/${redirectLanguage}` },
		body: { message: 'redirecting' }
	};
}
