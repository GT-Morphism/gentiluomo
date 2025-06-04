<script lang="ts">
  import type { Component } from "svelte";

  interface Props {
    title: string;
    description: string;
    theme?: "primary" | "secondary" | "tertiary";
    href: string;
    Icon: Component;
  }

  const { title, description, theme = "primary", href, Icon }: Props = $props();
</script>

<article data-component="card" data-theme={theme} class="flow">
  <header data-card-child="header">
    <Icon aria-hidden="true" />
    <h2>{title}</h2>
  </header>

  <p>{description}</p>

  <footer>
    <a class="animated-underline" data-theme={theme} {href}
      >Erfahre mehr<span class="sr-only"> über {title}</span></a
    >
  </footer>
</article>

<style>
  @layer components {
    [data-component="card"] {
      --_theme-color-light: var(--color-primary-500);
      --_theme-color-dark: var(--color-primary-900);

      &[data-theme="secondary"] {
        --_theme-color-light: var(--color-secondary-500);
        --_theme-color-dark: var(--color-secondary-900);
      }

      &[data-theme="tertiary"] {
        --_theme-color-light: var(--color-tertiary-500);
        --_theme-color-dark: var(--color-tertiary-900);
      }

      block-size: 100%;

      display: grid;
      grid-template-rows: auto 1fr auto;

      background-color: var(--_theme-color-dark);

      border-radius: var(--border-radius-md);
      border: 1px solid var(--_theme-color-light);

      padding: var(--spacing-xs-s);

      box-shadow: 0 0 0.5rem var(--_theme-color-light);
    }

    [data-card-child="header"] {
      position: relative;

      display: flex;
      align-items: center;
      column-gap: var(--spacing-xs-s);

      padding-block-end: var(--spacing-3xs-2xs);

      &::after {
        position: absolute;
        inset-block-end: 0;
        translate: 0 100%;

        content: "";
        inline-size: min(100%, 4rem);
        block-size: 0.5rem;
        background-color: var(--_theme-color-light);
      }
    }
  }
</style>
