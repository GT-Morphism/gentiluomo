<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  interface Props extends HTMLInputAttributes {
    ref?: HTMLInputElement | undefined;
  }

  let { ref = $bindable(), value = $bindable(), ...htmlInputAttributes }: Props = $props();
</script>

<input bind:this={ref} bind:value data-component="input" {...htmlInputAttributes} />

<style>
  @layer components {
    [data-component="input"] {
      flex: 1;
      inline-size: 0;
      min-inline-size: min(100%, 6rem);

      color: inherit;
      background-color: transparent;
      caret-color: var(--color-primary-500);

      border: 2px solid var(--color-primary-500);
      border-radius: var(--border-radius-md);

      padding-block: var(--spacing-3xs-2xs);
      padding-inline: var(--spacing-2xs-xs);

      &::placeholder {
        color: oklch(from var(--text-main) l c h / 0.7);
      }

      &:read-only {
        background-color: oklch(from var(--color-primary-900) l c h / 0.8);
        border-color: transparent;
      }
    }
  }
</style>
