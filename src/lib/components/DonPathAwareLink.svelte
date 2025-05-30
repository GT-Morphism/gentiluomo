<script lang="ts">
  import { page } from "$app/state";
  import type { Component } from "svelte";

  interface Props {
    href: string;
    label: string;
    theme?: "primary" | "secondary";
    config?: Array<"icon-only" | "with-visible-label">;
    Icon: Component;
  }

  const { href, label, theme = "primary", config = ["with-visible-label"], Icon }: Props = $props();
</script>

<a
  data-component="path-aware-link"
  data-theme={theme}
  data-pathawarelink-config={config?.join(" ")}
  class:current-page={page.url.pathname === href}
  {href}
>
  <Icon aria-hidden="true" />
  {#if config.includes("with-visible-label")}
    <span>{label}</span>
  {:else}
    <span class="sr-only">{label}</span>
  {/if}
</a>

<style>
  @layer components {
    [data-component="path-aware-link"] {
      text-decoration: inherit;
      color: inherit;

      &[data-theme="primary"] {
        --_theme-color: var(--color-primary-500);
      }

      &[data-theme="secondary"] {
        --_theme-color: var(--color-secondary-500);
      }

      display: inline-flex;
      column-gap: var(--spacing-2xs-xs);
      align-items: center;

      border-radius: calc(infinity * 1px);
    }

    [data-pathawarelink-config~="with-visible-label"] {
      &.current-page {
        text-decoration: underline wavy 2px var(--_theme-color);
        font-weight: bold;
      }

      &:not(.current-page):where(:hover, :focus-visible) {
        text-decoration: underline solid 4px var(--_theme-color);
      }
    }

    [data-pathawarelink-config~="icon-only"] {
      font-size: var(--font-size-step-lg);

      color: var(--_theme-color);
      background-color: var(--color-primary-950);

      border: 1px solid var(--_theme-color);
      border-radius: calc(infinity * 1px);

      padding: var(--spacing-2xs-xs);

      &.current-page {
        color: var(--color-primary-950);
        background-color: var(--_theme-color);
      }
    }
  }
</style>
