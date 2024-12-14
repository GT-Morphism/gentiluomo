<script lang="ts">
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import { i18n } from "$lib/i18n";

	import "../app.css";

	import Header from "$lib/components/header/Header.svelte";

	const { children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />


	<main>
		{@render children()}
	</main>

	<footer>Footer</footer>
</ParaglideJS>
