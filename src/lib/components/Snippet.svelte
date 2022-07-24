<script>
	import { toPlainText } from '@portabletext/svelte';
	export let content = [];
	export let maxLength = 200;
	$: plainText = toPlainText(content).slice(0, maxLength) + '...';
</script>

<p>
	{plainText}
</p>
