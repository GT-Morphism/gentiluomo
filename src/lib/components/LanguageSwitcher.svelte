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

	import { createPopover, createTooltip, melt } from "@melt-ui/svelte";

	import { CONFIG_TOOLTIP_WITH_DELAY } from "$lib/constants/configMeltElements";

	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createPopover({
		forceVisible: true,
	});

	const {
		elements: { trigger: tooltipTrigger, content: tooltipContent },
		states: { open: tooltipOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	import Globe from "lucide-svelte/icons/globe";
	import Tooltip from "$lib/components/Tooltip.svelte";

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

	const openLanguageSwitcherClasses =
		"bg-primary-800/50 text-primary-100 border-primary-500";
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.shiftKey && event.key.toLowerCase() === "l") {
			$open = !$open;
		}
	}}
/>

<!-- BUTTON TO TOGGLE LANGUAGE SWITCHER (AND TOOLTIP SHOWING SHORTCUT) -->
<button
	class="rounded-primary text-step-sm flex items-center gap-x-2 border p-1 {$open
		? openLanguageSwitcherClasses
		: 'hover:bg-primary-500/50 focus-visible:bg-primary-500/50 motion-safe:transition-colors motion-safe:duration-300'}"
	type="button"
	use:melt={$trigger}
	use:melt={$tooltipTrigger}
>
	<span>{languageTag()}</span>
	<Globe class="h-icon w-icon" />
	<span class="sr-only">{m.change_language()}</span>
</button>

<!-- TOOLTIP WITH SHORTCUT -->
{#if $tooltipOpen && !$open}
	<Tooltip contentBuilderStore={tooltipContent}>
		{m.change_language()}
		<span class="flex items-center gap-x-0.5">
			<kbd>shift</kbd>
			<kbd>l</kbd>
		</span>
	</Tooltip>
{/if}

<!-- LANGUAGE SWITCHER -->
{#if $open}
	<div
		class="rounded-primary text-step-sm border-primary-500 bg-surface-900 border bg-inherit px-2 py-3"
		use:melt={$content}
		transition:fade
	>
		<!-- POPOVER ARROW -->
		<div class="border-primary-500 border" use:melt={$arrow}></div>

		<!-- LIST OF AVAILABLE LANGUAGES -->
		<ul class="grid gap-y-2">
			{#each availableLanguageTags as lang}
				<li>
					<a
						class="rounded-primary block border p-1 {lang === languageTag()
							? openLanguageSwitcherClasses
							: 'hover:bg-primary-500/50 focus-visible:bg-primary-500/50'}"
						class:cursor-default={lang === languageTag()}
						href={currentPathWithoutLanguage}
						hreflang={lang}
					>
						<span>{lang}</span>
						<span class="text-step-xs">({getLanguageFromCode(lang)})</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
