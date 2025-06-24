<script lang="ts">
  import type { Component, Snippet } from "svelte";
  import IconNotedpadText from "~icons/lucide/notepad-text";
  import IconInfo from "~icons/lucide/info";
  import IconNotebookPen from "~icons/lucide/notebook-pen";

  interface Props {
    type: "tldr" | "info" | "note";
    children: Snippet;
  }

  const { type, children }: Props = $props();

  const CALLOUT_TYPE_LABEL_MAP: Map<typeof type, { labelText: string; Icon: Component }> = new Map([
    [
      "tldr",
      {
        labelText: "In Kurz",
        Icon: IconNotedpadText,
      },
    ],
    [
      "info",
      {
        labelText: "Info",
        Icon: IconInfo,
      },
    ],
    [
      "note",
      {
        labelText: "Zum Mitschreiben",
        Icon: IconNotebookPen,
      },
    ],
  ]);

  const labelText = CALLOUT_TYPE_LABEL_MAP.get(type)?.labelText;
  const Icon = CALLOUT_TYPE_LABEL_MAP.get(type)?.Icon;
</script>

<aside data-component="callout" data-callout-type={type}>
  <div data-callout-child="label">
    <Icon />
    <span>{labelText}</span>
  </div>

  <p data-callout-child="body">
    {@render children()}
  </p>
</aside>

<style>
  @layer components {
    [data-component="callout"] {
      --_theme-color: var(--color-primary-800);
      --_theme-color-highlight: var(--color-primary-500);
      display: grid;
      grid-template-rows: auto 1fr;

      &[data-callout-type="info"] {
        --_theme-color: var(--color-secondary-800);
        --_theme-color-highlight: var(--color-secondary-500);
      }

      &[data-callout-type="note"] {
        --_theme-color: var(--color-tertiary-800);
        --_theme-color-highlight: var(--color-tertiary-500);
      }
    }

    [data-callout-child="label"] {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-3xs-2xs);

      inline-size: fit-content;

      background-color: var(--_theme-color);

      padding: calc(var(--spacing-3xs-2xs) / 2);
    }

    [data-callout-child="body"] {
      border-inline-start: calc(var(--spacing-3xs-2xs) / 2) solid var(--_theme-color-highlight);

      background-color: oklch(from var(--_theme-color) l c h / 0.25);

      padding: var(--spacing-xs-s);
    }
  }
</style>
