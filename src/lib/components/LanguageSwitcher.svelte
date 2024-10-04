<script lang="ts">
	import {
		languageTag,
		availableLanguageTags,
		type AvailableLanguageTag,
	} from "$lib/paraglide/runtime";
	import * as m from "$lib/paraglide/messages";
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";
	import { i18n } from "$lib/i18n";

	import { createPopover, melt } from "@melt-ui/svelte";

	const {
		elements: { trigger, content, arrow, close },
		states: { open },
	} = createPopover({
		forceVisible: true,
	});

	import Globe from "lucide-svelte/icons/globe";
	import CircleX from "lucide-svelte/icons/circle-x";

	const currentPathWithoutLanguage = $derived(i18n.route($page.url.pathname));

	function getLanguageFromCode(code: AvailableLanguageTag) {
		switch (code) {
			case "de":
				return m.german_language();
			case "en":
				return m.english_language();
			default:
				return m.german_language();
		}
	}
</script>

<button
	class="text-highlight-300 flex items-center gap-x-2 rounded-md border p-1 {$open
		? 'border-primary-300 bg-primary-300/50'
		: 'border-highlight-300 bg-primary-500/50 hover:bg-primary-300/50 focus-visible:bg-primary-300/50'}"
	type="button"
	use:melt={$trigger}
>
	<span>{languageTag()}</span>
	<Globe />
	<span class="sr-only">{m.change_language()}</span>
</button>

{#if $open}
	<div
		class="border-primary-300 bg-surface-500/50 relative rounded-md border bg-inherit p-4 backdrop-blur-lg"
		use:melt={$content}
		transition:fade
	>
		<button
			class="bg-surface-950 text-primary-300 focus-visible:text-highlight-300 hover:text-highlight-300 absolute -top-3 -right-3 rounded-full"
			type="button"
			use:melt={$close}
		>
			<CircleX />
			<span class="sr-only">{m.close_popover()}</span>
		</button>

		<div
			class="border-primary-300 !bg-primary-300 border"
			use:melt={$arrow}
		></div>
		<ul class="grid gap-y-4">
			{#each availableLanguageTags as lang}
				<li>
					<a
						class="block rounded-md border p-1 {lang === languageTag()
							? 'bg-primary-300/50 border-primary-300'
							: 'hover:bg-primary-300/50 focus-visible:bg-primary-300/50'}"
						class:cursor-default={lang === languageTag()}
						href={currentPathWithoutLanguage}
						hreflang={lang}
					>
						<span>{lang}</span>
						<span class="text-sm">({getLanguageFromCode(lang)})</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
