import { SUPPORTED_LANGUAGES } from '$lib/languageConfig';

export function parseLocaleData(locale: string): LocaleData {
	const [language, region] = locale.split('-');
	if (!SUPPORTED_LANGUAGES.includes(language)) {
		console.error(`Language "${language}" is not supported`);
	}

	return {
		language: language || null,
		region: region || null
	};
}
