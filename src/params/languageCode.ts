import { SUPPORTED_LANGUAGES } from '../lib/languageUtils';

export function match(param: string): boolean {
	const langRegex = `^(${SUPPORTED_LANGUAGES.join('|')})$`;
	return new RegExp(langRegex).test(param);
}
