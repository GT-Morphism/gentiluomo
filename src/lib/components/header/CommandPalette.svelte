<script lang="ts">
	import * as m from "$lib/paraglide/messages";
	import { createDialog, createTooltip, melt } from "@melt-ui/svelte";
	import { fade, scale } from "svelte/transition";
	import { afterNavigate } from "$app/navigation";

	import Command from "lucide-svelte/icons/command";
	import X from "lucide-svelte/icons/x";
	import Bolt from "lucide-svelte/icons/bolt";
	import Brain from "lucide-svelte/icons/brain";
	import Pi from "lucide-svelte/icons/pi";
	import Handshake from "lucide-svelte/icons/handshake";
	import DNA from "lucide-svelte/icons/dna";

	import Tooltip from "$lib/components/Tooltip.svelte";
	import { CONFIG_TOOLTIP_WITH_DELAY } from "$lib/constants/configMeltElements";
	import CommandPaletteSection from "./CommandPaletteSection.svelte";

	const {
		elements: {
			trigger,
			portalled,
			overlay,
			content,
			title,
			description,
			close,
		},
		states: { open },
	} = createDialog({
		forceVisible: true,
	});

	const {
		elements: { trigger: tooltipTrigger, content: tooltipContent },
		states: { open: tooltipOpen },
	} = createTooltip(CONFIG_TOOLTIP_WITH_DELAY);

	afterNavigate(() => {
		$open = false;
	});
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.shiftKey && event.key.toLowerCase() === "k") {
			$open = !$open;
		}
	}}
/>

<!-- BUTTON TO TOGGLE COMMANDPALETTE (AND TOOLTIP SHOWING SHORTCUT) -->
<button
	class="hover:motion-safe:animate-smoothWiggleAndZoom hover:text-primary-500 focus-visible:text-primary-500 focus-visible:motion-safe:animate-smoothWiggleAndZoom inline-block motion-safe:transition-colors motion-safe:duration-300"
	type="button"
	use:melt={$trigger}
	use:melt={$tooltipTrigger}
>
	<Command class="h-icon w-icon" />
	<span class="sr-only">{m.platform_shortcuts()}</span>
</button>

<!-- TOOLTIP WITH SHORTCUT -->
{#if $tooltipOpen && !$open}
	<Tooltip contentBuilderStore={tooltipContent}>
		{m.platform_shortcuts()}
		<span class="flex items-center">
			<kbd>shift</kbd>
			<kbd>k</kbd>
		</span>
	</Tooltip>
{/if}

<!-- COMMANDPALETTE -->
{#if $open}
	<div class="fixed inset-0 grid place-items-center" use:melt={$portalled}>
		<div
			transition:fade
			class="bg-surface-950/30 fixed inset-0 backdrop-blur-xl"
			use:melt={$overlay}
		></div>
		<article
			transition:scale
			class="rounded-primary text-step-sm z-10 max-w-prose overflow-y-hidden border border-gray-500"
			use:melt={$content}
		>
			<!-- CLOSING X ICON -->
			<div class="flex justify-end border-b border-gray-500/50">
				<button class="p-1" type="button" use:melt={$close}>
					<X class="h-icon w-icon" />
					<span class="sr-only">
						{m.close_something({ something: m.platform_shortcuts() })}
					</span>
				</button>
			</div>

			<!-- COMMANDPALETTE CONTENT -->
			<div
				class="section-child:not-last:border-b bg-surface-950/50 section-child:not-last:border-b-gray-500/50 section-child:not-last:pb-4 grid max-h-[32rem] gap-y-4 overflow-y-auto px-8 py-4"
			>
				<header>
					<h2 class="text-step-lg" use:melt={$title}>
						{m.platform_shortcuts_title()}
					</h2>
					<p class="text-step-sm" use:melt={$description}>
						{m.platform_shortcuts_description()}
					</p>
				</header>

				<CommandPaletteSection
					label="Gentleman"
					description={m.gentleman_introductory_text()}
					Icon={Handshake}
					shortcuts={[
						{
							content: `Gentleman ${m.overview()}`,
							href: "/der-gentleman",
							keys: ["g", "g"],
						},

						{
							content: `Gentleman ${m.roadmap()}`,
							href: "/der-gentleman/leitfaden",
							keys: ["g", "l"],
						},

						{
							content: `Gentleman ${m.advice()}`,
							href: "/der-gentleman/ratschlaege",
							keys: ["g", "r"],
						},
					]}
				/>

				<CommandPaletteSection
					label={m.developer()}
					description={m.developer_introductory_text()}
					Icon={Pi}
					shortcuts={[
						{
							content: `${m.developer()} ${m.overview()}`,
							href: "/der-entwickler",
							keys: ["e", "e"],
						},

						{
							content: `${m.developer()} ${m.roadmap()}`,
							href: "/der-entwickler/leitfaden",
							keys: ["e", "l"],
						},

						{
							content: `${m.developer()} ${m.advice()}`,
							href: "/der-entwickler/ratschlaege",
							keys: ["e", "r"],
						},
					]}
				/>

				<CommandPaletteSection
					label="Mentor"
					description={m.mentor_introductory_text()}
					Icon={Brain}
					shortcuts={[
						{
							content: `Mentor ${m.overview()}`,
							href: "/der-mentor",
							keys: ["m", "m"],
						},

						{
							content: `Mentor ${m.roadmap()}`,
							href: "/der-mentor/leitfaden",
							keys: ["m", "l"],
						},
						{
							content: `Mentor ${m.advice()}`,
							href: "/der-mentor/ratschlaege",
							keys: ["m", "r"],
						},
					]}
				/>

				<CommandPaletteSection
					label={m.principles()}
					description={m.principles_introductory_text()}
					Icon={DNA}
					shortcuts={[
						{
							content: `${m.principles()} ${m.overview()}`,
							href: "/die-prinzipien",
							keys: ["p", "p"],
						},

						{
							content: `Intra-${m.principles()}`,
							href: "/die-prinzipien/intra-prinzipien",
							keys: ["p", "a"],
						},

						{
							content: `Inter-${m.principles()}`,
							href: "/die-prinzipien/inter-prinzipien",
							keys: ["p", "r"],
						},
					]}
				/>

				<CommandPaletteSection
					label="System"
					Icon={Bolt}
					shortcuts={[
						{
							content: m.change_language(),
							keys: ["shift", "l"],
							onclick: () => {
								const event = new KeyboardEvent("keydown", {
									key: "l",
									bubbles: true,
									shiftKey: true,
								});
								document.dispatchEvent(event);
							},
						},

						{
							content: m.platform_shortcuts(),
							keys: ["shift", "k"],
							onclick: () => {
								const event = new KeyboardEvent("keydown", {
									key: "k",
									bubbles: true,
									shiftKey: true,
								});
								document.dispatchEvent(event);
							},
						},

						{
							content: m.global_search(),
							keys: ["shift", "s"],
							onclick: () => {
								const event = new KeyboardEvent("keydown", {
									key: "s",
									bubbles: true,
									shiftKey: true,
								});
								document.dispatchEvent(event);
							},
						},
					]}
				/>
			</div>

			<!-- NOTE ON HOW TO USE COMMAND PALETTE VIA KEYBOARD -->
			<div class="flex justify-center gap-x-8 border-t border-gray-500/50 py-2">
				<div class="text-step-xs flex items-center justify-center gap-x-2">
					<kbd data-subtle>tab</kbd>
					{m.to_navigate()}
				</div>
				<div class="text-step-xs flex items-center justify-center gap-x-2">
					<kbd data-subtle>enter</kbd>
					{m.to_use()}
				</div>
				<div class="text-step-xs flex items-center justify-center gap-x-2">
					<kbd data-subtle>esc</kbd>
					{m.to_close()}
				</div>
			</div>
		</article>
	</div>
{/if}
