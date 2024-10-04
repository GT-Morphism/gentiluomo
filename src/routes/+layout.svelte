<script lang="ts">
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { i18n } from "$lib/i18n";

	import "../app.css";

	import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";

	const { children } = $props();
</script>

<ParaglideJS {i18n}>
	<header class="flex items-center justify-between">
		<LanguageSwitcher />
	</header>
	<main>
		{@render children()}
	</main>
	<footer>Footer</footer>
</ParaglideJS>
