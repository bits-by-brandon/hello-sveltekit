import { page } from '$app/stores';
import { DEFAULT_LANGUAGE } from '$lib/languageConfig';
import { derived } from 'svelte/store';

export function createLanguage() {
	return derived(page, ($page) => {
		$page.params;
		return $page.params.lang || DEFAULT_LANGUAGE;
	});
}

export const language = createLanguage();
