<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue, HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    config?: string;
    children: Snippet;
    classProp?: ClassValue;
  }

  const { classProp, config, children, ...htmlButtonAttributes }: Props = $props();
</script>

<button
  data-component="button"
  class={classProp}
  data-button-config={config}
  {...htmlButtonAttributes}
>
  {@render children()}
</button>

<style>
  @layer components {
    [data-component="button"] {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-3xs-2xs);

      background-color: oklch(from var(--color-primary-800) l c h / 0.25);
      color: inherit;
      border: 2px solid transparent;
      border-radius: var(--border-radius-md);

      padding-block: var(--spacing-3xs-2xs);
      padding-inline: var(--spacing-2xs-xs);

      @media (prefers-reduced-motion: no-preference) {
        &:where(:hover, :focus-visible) {
          :global(svg) {
            animation: smoothWiggleAndZoom var(--default-animation-config);
          }
        }
      }
    }
    [data-button-config="cta"] {
      position: relative;
      border: 1px solid var(--color-primary-500);

      transition: color 500ms var(--ease-out-4);

      /* for the `::before` element while animating */
      overflow: clip;

      &::before {
        content: "";
        position: absolute;
        inset: -1px;

        background-color: var(--color-primary-500);
        border-radius: var(--border-radius-md);

        scale: 0 1;
        transform-origin: left;
        transition: scale 500ms var(--ease-out-4);

        z-index: -1;
      }

      &:where(:hover, :focus-visible) {
        color: oklch(0 0 0);
        &::before {
          scale: 1 1;
        }
      }
    }

    [data-button-config~="subtle"] {
      border: 1px solid var(--color-primary-800);

      transition: border-color 500ms var(--ease-out-4);

      &:where(:hover, :focus-visible) {
        border-color: var(--color-primary-500);
      }
    }

    [data-button-config~="alert"] {
      background-color: oklch(from var(--color-secondary-800) l c h / 0.25);
      border: 1px solid var(--color-secondary-800);

      transition: border-color 500ms var(--ease-out-4);

      &:where(:hover, :focus-visible) {
        border-color: var(--color-secondary-500);
      }
    }

    [data-button-config~="icon"] {
      padding-inline: var(--spacing-3xs-2xs);

      transition:
        color 500ms var(--ease-out-4),
        background-color 500ms var(--ease-out-4);

      &.active {
        color: oklch(0 0 0);
        background-color: var(--color-primary-500);
      }
    }

    [data-button-config~="round"] {
      aspect-ratio: 1 / 1;
      border-radius: calc(infinity * 1px);
    }

    [data-button-config~="small"] {
      font-size: var(--font-size-step-sm);
    }
  }
</style>
