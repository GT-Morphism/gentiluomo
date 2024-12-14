<script lang="ts">
	import { melt, type TooltipElements } from "@melt-ui/svelte";
	import type { Snippet } from "svelte";
	import { scale } from "svelte/transition";

	const {
		children,
		contentBuilderStore,
		arrowBuilderStore,
	}: {
		children: Snippet;
		contentBuilderStore: TooltipElements["content"];
		arrowBuilderStore?: TooltipElements["arrow"];
	} = $props();
</script>

<div
	class="text-step-sm bg-highlight-900 flex max-w-80 items-center justify-between gap-x-2 rounded px-2 py-1 text-center"
	transition:scale
	use:melt={$contentBuilderStore}
>
	{#if $arrowBuilderStore}
		<div use:melt={$arrowBuilderStore}></div>
	{/if}
	{@render children()}
</div>
