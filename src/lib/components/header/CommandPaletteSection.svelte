<script lang="ts">
	import type { Icon as LucideIconType } from "lucide-svelte/icons";

	interface Props {
		label: string;
		description?: string;
		// for typing, see: https://lucide.dev/guide/packages/lucide-svelte#svelte-5
		Icon: typeof LucideIconType;
		shortcuts: {
			content: string;
			href?: string;
			keys: string[];
			onclick?: () => void;
		}[];
	}

	const { label, description, Icon, shortcuts }: Props = $props();
</script>

{#snippet badgeSnippet()}
	<h3
		class="rounded-primary bg-secondary-900/50 text-secondary-300 text-step-xs flex w-fit items-center gap-x-1 px-2 py-1"
	>
		<Icon class="h-icon-xs w-icon-xs" />
		{label}
	</h3>
{/snippet}

{#snippet shortcutSnippet({
	content,
	href,
	keys,
	onclick,
}: Props["shortcuts"][number])}
	<li>
		<svelte:element
			this={href ? "a" : "button"}
			class="hover:bg-secondary-900 focus-visible:bg-secondary-900 flex w-full justify-between px-2 py-1"
			{href}
			{onclick}
			role={href ? "link" : "button"}
		>
			{content}
			<span
				aria-label={`shortcut ${keys[0]}${keys[1]}`}
				class="flex items-center"
			>
				<kbd>{keys[0]}</kbd>
				<kbd>{keys[1]}</kbd>
			</span>
		</svelte:element>
	</li>
{/snippet}

<section class="flow">
	{@render badgeSnippet()}

	{#if description}
		<p
			class="before:from-secondary-900 before:via-secondary-800 before:to-secondary-900 grid grid-cols-[4px_1fr] gap-x-2 before:h-full before:w-full before:bg-gradient-to-b before:content-['']"
		>
			{description}
		</p>
	{/if}
	<ul class="grid gap-y-2">
		{#each shortcuts as shortcut}
			{@render shortcutSnippet(shortcut)}
		{/each}
	</ul>
</section>
