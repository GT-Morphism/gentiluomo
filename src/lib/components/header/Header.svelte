<script lang="ts">
	import * as m from "$lib/paraglide/messages";
	import { createTooltip, melt } from "@melt-ui/svelte";
	import defineShortcuts, {
		type ShortcutConfig,
	} from "$lib/utils/shortcuts.svelte";

	import IconDiscord from "$lib/components/icons/IconDiscord.svelte";
	import Search from "lucide-svelte/icons/search";
	import Send from "lucide-svelte/icons/send";

	import Logo from "$lib/components/Logo.svelte";
	import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
	import Tooltip from "$lib/components/Tooltip.svelte";
	import { languageTag } from "$lib/paraglide/runtime";
	import { CONFIG_TOOLTIP_WITH_DELAY } from "$lib/constants/configMeltElements";

	const {
		elements: {
			trigger: gentlemanTrigger,
			content: gentlemanContent,
			arrow: gentlemanArrow,
		},
		states: { open: gentlemanOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	const {
		elements: {
			trigger: developerTrigger,
			content: developerContent,
			arrow: developerArrow,
		},
		states: { open: developerOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	const {
		elements: {
			trigger: mentorTrigger,
			content: mentorContent,
			arrow: mentorArrow,
		},
		states: { open: mentorOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	const {
		elements: {
			trigger: principlesTrigger,
			content: principlesContent,
			arrow: principlesArrow,
		},
		states: { open: principlesOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	const {
		elements: { trigger: searchTrigger, content: searchContent },
		states: { open: searchOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	const {
		elements: { trigger: contactTrigger, content: contactContent },
		states: { open: contactOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	$effect(() => {
		const headerShortcuts: ShortcutConfig[] = [
			{
				href: "/der-gentleman",
				firstKey: "g",
				secondKey: "g",
			},
			{
				href: "/der-entwickler",
				firstKey: "g",
				secondKey: "e",
			},
			{
				href: "/der-mentor",
				firstKey: "g",
				secondKey: "m",
			},
			{
				href: "/die-prinzipien",
				firstKey: "g",
				secondKey: "p",
			},
			{
				href: "/kontakt",
				firstKey: "g",
				secondKey: "k",
			},
		];

		const { mount, unmount } = defineShortcuts(headerShortcuts);

		mount();

		return () => unmount();
	});
</script>

<header
	class="bg-surface-950 after:from-primary-800 after:via-primary-500 after:to-primary-800 relative py-4 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:content-['']"
>
	<div class="wrapper flex items-center justify-between">
		<!-- LOGO -->
		<div class="max-w-10">
			<Logo />
		</div>

		<nav class="text-step-sm">
			<ul class="flex items-center gap-x-8">
				<li>
					<a
						class="animated-underline flex items-center gap-x-2"
						href="/der-gentleman"
						use:melt={$gentlemanTrigger}
					>
						{`${languageTag() === "de" ? "Der" : "The"} Gentleman`}
					</a>
				</li>
				<li>
					<a
						class="animated-underline flex items-center gap-x-2"
						href="/der-entwickler"
						use:melt={$developerTrigger}
					>
						{`${languageTag() === "de" ? "Der" : "The"} ${m.developer()}`}
					</a>
				</li>
				<li>
					<a
						class="animated-underline flex items-center gap-x-2"
						href="/der-mentor"
						use:melt={$mentorTrigger}
					>
						{`${languageTag() === "de" ? "Der" : "The"} Mentor`}
					</a>
				</li>

				<li>
					<a
						class="animated-underline flex items-center gap-x-2"
						href="/die-prinzipien"
						use:melt={$principlesTrigger}
					>
						{`${languageTag() === "de" ? "Die" : "The"} ${m.principles()}`}
					</a>
				</li>
			</ul>
		</nav>

		<div class="flex items-center gap-x-5">
			<a
				class="hover:motion-safe:animate-smoothWiggleAndZoom hover:text-primary-500 focus-visible:text-primary-500 focus-visible:motion-safe:animate-smoothWiggleAndZoom inline-block motion-safe:transition-colors motion-safe:duration-300"
				href="/mitgliedschaft"
				use:melt={$searchTrigger}
			>
				<Search class="h-icon w-icon" />
				<span class="sr-only">Suche</span>
			</a>

			<a
				class="hover:motion-safe:animate-smoothWiggleAndZoom hover:text-primary-500 focus-visible:text-primary-500 focus-visible:motion-safe:animate-smoothWiggleAndZoom inline-block motion-safe:transition-colors motion-safe:duration-300"
				href="/kontakt"
				use:melt={$contactTrigger}
			>
				<Send class="h-icon w-icon" />
				<span class="sr-only">Kontakt</span>
			</a>

			<a
				class="hover:motion-safe:animate-rubberBand hover:text-primary-500 focus-visible:motion-safe:animate-rubberBand focus-visible:text-primary-500 block motion-safe:transition-colors motion-safe:duration-300"
				href="https://discord.gg/YEfAY9dV"
				title="gentiluomo Discord"
			>
				<IconDiscord class="h-icon w-icon" />
				<span class="sr-only">gentiluomo Discord</span>
			</a>

			<div class="bg-primary-500 min-h-5 w-0.5"></div>

			<LanguageSwitcher />
		</div>

		{#if $gentlemanOpen}
			<Tooltip
				contentBuilderStore={gentlemanContent}
				arrowBuilderStore={gentlemanArrow}
			>
				<span class="flex items-center">
					<kbd>g</kbd>
					<kbd>g</kbd>
				</span>
			</Tooltip>
		{/if}

		{#if $developerOpen}
			<Tooltip
				contentBuilderStore={developerContent}
				arrowBuilderStore={developerArrow}
			>
				<span class="flex items-center">
					<kbd>g</kbd>
					<kbd>e</kbd>
				</span>
			</Tooltip>
		{/if}

		{#if $mentorOpen}
			<Tooltip
				contentBuilderStore={mentorContent}
				arrowBuilderStore={mentorArrow}
			>
				<span class="flex items-center">
					<kbd>g</kbd>
					<kbd>m</kbd>
				</span>
			</Tooltip>
		{/if}

		{#if $principlesOpen}
			<Tooltip
				contentBuilderStore={principlesContent}
				arrowBuilderStore={principlesArrow}
			>
				<span class="flex items-center">
					<kbd>g</kbd>
					<kbd>p</kbd>
				</span>
			</Tooltip>
		{/if}

		{#if $searchOpen}
			<Tooltip contentBuilderStore={searchContent}>
				{m.search_tooltip_content()}
				<span class="flex items-center">
					<kbd>shift</kbd>
					<kbd>s</kbd>
				</span>
			</Tooltip>
		{/if}

		{#if $contactOpen}
			<Tooltip contentBuilderStore={contactContent}>
				{m.contact_tooltip_content()}
				<span class="flex items-center">
					<kbd>g</kbd>
					<kbd>k</kbd>
				</span>
			</Tooltip>
		{/if}
	</div>
</header>
