<script lang="ts">
  import { page } from "$app/state";
  import type { Component } from "svelte";

  interface Props {
    href: string;
    label: string;
    theme?: "primary" | "secondary" | "tertiary";
    config?: Array<
      | "with-icon-only"
      | "with-visible-label"
      | "with-icon-lg"
      | "with-icon-sm"
      | "with-color"
      | "with-animated-shadow"
      | "with-visible-border"
      | "with-small-font"
    >;
    Icon?: Component;
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
  {#if Icon}
    <Icon aria-hidden="true" />
  {/if}

  {#if config.includes("with-icon-only")}
    <span class="sr-only">{label}</span>
  {:else}
    <span>{label}</span>
  {/if}
</a>

<style>
  @layer components {
    [data-component="path-aware-link"] {
      --_theme-color: var(--color-primary-500);
      --_base-focus-outline-color: var(--_theme-color);

      &[data-theme="secondary"] {
        --_theme-color: var(--color-secondary-500);
      }

      &[data-theme="tertiary"] {
        --_theme-color: var(--color-tertiary-500);
      }

      display: inline-flex;
      column-gap: var(--spacing-2xs-xs);
      align-items: center;

      border-radius: calc(infinity * 1px);
    }

    [data-pathawarelink-config~="with-small-font"] {
      font-size: var(--font-size-step-sm);
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

    [data-pathawarelink-config~="with-color"] {
      color: var(--_theme-color);
      background-color: var(--color-primary-950);
    }

    [data-pathawarelink-config~="with-visible-border"] {
      border: 1px solid var(--_theme-color);
    }

    [data-pathawarelink-config~="with-icon-only"] {
      aspect-ratio: 1 / 1;

      padding: var(--spacing-2xs-xs);

      &.current-page {
        color: var(--color-primary-950);
        background-color: var(--_theme-color);
      }
    }

    [data-pathawarelink-config~="with-icon-sm"] {
      font-size: var(--font-size-step-sm);
    }

    [data-pathawarelink-config~="with-icon-lg"] {
      font-size: var(--font-size-step-lg);
    }

    [data-pathawarelink-config~="with-animated-shadow"] {
      /* inspired by: https://nerdy.dev/ */
      --_shadow-size: 0;
      --_shadow-color: var(--color-primary-500);

      &[data-theme="secondary"] {
        --_shadow-color: var(--color-secondary-500);
      }

      &[data-theme="tertiary"] {
        --_shadow-color: var(--color-tertiary-500);
      }

      display: block;

      padding: var(--spacing-3xs);
      box-shadow: 0 0 var(--_shadow-size) var(--_shadow-color);
      transition:
        box-shadow 500ms var(--ease-out-4),
        /* from `base.css` */ outline-offset var(--ease-2) 200ms;

      &:active {
        --_shadow-size: 0.5em;
      }

      &:where(:hover, :focus-visible):not(:active) {
        --_shadow-size: 2em;
      }
    }
  }
</style>
