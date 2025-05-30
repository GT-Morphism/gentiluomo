<script lang="ts">
  import DonPageNavigation from "$lib/components/DonPageNavigation.svelte";

  const { children } = $props();
</script>

<div data-layout="side-by-side" class="wrapper">
  <div data-sidebyside-child="sidebar">
    <DonPageNavigation />
  </div>
  <main class="flow prose" data-sidebyside-child="content">
    {@render children()}
  </main>
</div>

<style>
  @layer layouts {
    [data-layout="side-by-side"] {
      --_content-column-span: 1;
      --_content-row-start: 2;
      --_content-column-start: 1;

      container: side-by-side / inline-size;

      display: grid;
      /*
        On Safari, using `inline-size` and `auto-fit` causes columns to collapse.
        The fix for that seems already to be pushed (https://github.com/WebKit/WebKit/commit/348ac9f493b2119efabc54d7f02eefbb6fc6b4c8), however, maybe we need to wait for
        an iOS and macOS update.
      */
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
      column-gap: var(--spacing-s-m); /* clamp(1rem, 0.75rem + 1.25vw, 1.875rem) */
    }

    [data-sidebyside-child="sidebar"] {
      display: none;
      @container side-by-side (inline-size >= calc(3 * 200px + 200px + 3 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem))) {
        display: block;
      }
    }

    [data-sidebyside-child="content"] {
      grid-column-start: var(--_content-column-start);
      grid-column-end: span var(--_content-column-span);
      grid-row-start: var(--_content-row-start);
      min-block-size: 200vb;
      background-color: oklch(from var(--color-primary-800) l c h / 0.2);
      border-radius: var(--border-radius-md);
      border: 2px solid var(--color-primary-800);

      padding-block: var(--spacing-xs-s);
      padding-inline: var(--spacing-2xs-xs);

      @container side-by-side (inline-size >= calc(3 * 200px + 200px + 3 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem))) {
        --_content-row-start: 1;
        --_content-column-start: 2;
        --_content-column-span: 3;
      }

      @container side-by-side (inline-size >= calc(4 * 200px + 200px + 4 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem))) {
        --_content-column-span: 4;
      }
    }
  }
</style>
