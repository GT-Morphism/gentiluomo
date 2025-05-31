<script lang="ts">
  import IconInfo from "~icons/lucide/info";
  import IconChevronRight from "~icons/lucide/chevron-right";
  import DonDetails from "./DonDetails.svelte";
  import type { Snippet } from "svelte";

  const id = crypto.randomUUID();
  const labelId = `label-${id}`;

  interface Props {
    open?: boolean;
    tldr?: string;
    body: Snippet;
  }

  const { open = false, tldr, body }: Props = $props();
</script>

<aside data-component="callout" aria-labelledby={labelId}>
  <DonDetails {open}>
    {#snippet summary()}
      <div class="prose" data-callout-child="header">
        <div id={labelId} data-callout-child="label">
          <IconInfo aria-hidden="true" />
          <span>Info</span>
        </div>

        {#if tldr}
          <span data-callout-child="tldr">{tldr}</span>
        {/if}

        <IconChevronRight aria-hidden="true" data-details-child="marker" />
      </div>
    {/snippet}

    <div class="flow prose" data-callout-child="body">
      {@render body()}
    </div>
  </DonDetails>
</aside>

<style>
  @layer components {
    [data-component="callout"] {
      --_spacing-inline: var(--spacing-s-m);
      --_height-divider: var(--spacing-2xs-xs);

      background-color: var(--color-primary-900);

      border-radius: var(--border-radius-md);
    }

    [data-callout-child="header"] {
      position: relative;

      align-items: center;

      column-gap: var(--spacing-2xs-xs);

      &:has([data-callout-child="tldr"]) {
        display: grid;
        grid-template-columns: auto 1fr auto;
      }

      &:not(:has([data-callout-child="tldr"])) {
        display: flex;
        justify-content: space-between;
      }

      border-radius: var(--border-radius-md);

      padding-inline: var(--_spacing-inline);
      padding-block-start: var(--spacing-xs-s);
      padding-block-end: var(--spacing-s-m);

      &::after {
        content: "";
        position: absolute;
        inset-inline: 0;
        inset-block-end: 0;
        block-size: var(--_height-divider);
        background-color: var(--color-primary-500);
      }
    }

    [data-callout-child="label"] {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-3xs-2xs);

      font-size: var(--font-size-step-sm);

      background-color: var(--color-primary-900);

      border: 1px solid var(--color-primary-500);
      border-radius: var(--border-radius-md);

      padding-block: var(--spacing-3xs);
      padding-inline: var(--spacing-3xs-2xs);
    }

    [data-callout-child="body"] {
      padding-inline: var(--_spacing-inline);
      padding-block-start: var(--spacing-s-m);
      padding-block-end: var(--spacing-xs-s);
    }
  }
</style>
