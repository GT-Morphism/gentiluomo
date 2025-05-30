<script lang="ts">
  import { onMount } from "svelte";

  import StaticLogo from "./StaticLogo.svelte";
  import IconLayoutDashboard from "~icons/lucide/layout-dashboard";
  import IconNotebookText from "~icons/lucide/notebook-text";
  import IconHandshake from "~icons/lucide/handshake";
  import IconMenu from "~icons/lucide/menu";
  import MobileNavigation from "./MobileNavigation.svelte";

  import { addDialog, showDialog } from "$lib/components/dialog/Dialog.svelte";

  onMount(() => {
    addDialog("mobile-navigation", mobileNavigation);
  });
</script>

<header data-component="site-header">
  <nav data-sideheader-child="navigation">
    <a href="/">
      <StaticLogo />
      <span class="sr-only">Zurück zur Startseite</span>
    </a>

    <a href="/notizen">
      <IconNotebookText />
      <span class="sr-only">Zu den Notizen</span>
    </a>
    <a href="/danksagung">
      <IconHandshake />
      <span class="sr-only">Zur Danksagung</span>
    </a>

    <a href="/dashboard">
      <IconLayoutDashboard />
      <span class="sr-only">Zum Dashboard</span>
    </a>

    <button
      data-siteheader-child="mobile-navigation-trigger"
      onclick={() => showDialog("mobile-navigation")}
    >
      <IconMenu />
      <span class="sr-only">Mobile Navigation öffnen</span>
    </button>
  </nav>
</header>

{#snippet mobileNavigation()}
  <MobileNavigation />
{/snippet}

<style>
  [data-component="site-header"] {
    @media (width < calc(3 * 200px + 200px + 3 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem) + 2rem)) {
      position: sticky;
      top: 0;
      backdrop-filter: blur(1.25rem);

      z-index: var(--zIndex-header);
    }
  }

  [data-sideheader-child="navigation"] {
    display: flex;
    align-items: center;
    column-gap: calc(var(--spacing-s-m) - var(--spacing-3xs));
    padding-block: var(--spacing-xs-s);
    padding-inline: var(--spacing-s-m);

    > :first-child {
      font-size: var(--font-size-step-lg);
      margin-inline-end: auto;
    }
  }

  [data-siteheader-child="mobile-navigation-trigger"] {
    background-color: transparent;
    border: none;

    :global(svg) {
      color: var(--text-main);
    }

    @media (width >= calc(3 * 200px + 200px + 3 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem) + 2rem)) {
      display: none;
    }
  }

  :where(a, button) {
    /* inspired by: https://nerdy.dev/ */
    --_shadow-size: 0;
    aspect-ratio: 1 / 1;
    padding: var(--spacing-3xs);
    border-radius: calc(infinity * 1px);
    box-shadow: 0 0 var(--_shadow-size) var(--background-accent-main);
    transition: box-shadow 500ms var(--ease-out-4);

    &:active {
      --_shadow-size: 0.5em;
    }

    &:where(:hover, :focus-visible):not(:active) {
      --_shadow-size: 2em;
    }
  }

  a {
    &[href="/"] {
      max-inline-size: 3rem;
      aspect-ratio: 1 / 1;
    }

    &:not([href="/"]) {
      @media (width < calc(3 * 200px + 200px + 3 * clamp(1rem, 0.75rem + 1.25vw, 1.875rem) + 2rem)) {
        display: none;
      }
    }
  }
</style>
