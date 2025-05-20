<script lang="ts">

  import StaticLogo from "./StaticLogo.svelte";
  import IconGithub from "~icons/tabler/brand-github";
  import IconScribble from "~icons/tabler/scribble";
  import IconHandshake from "~icons/lucide/handshake";
</script>
<header data-component="site-header">
  <nav data-sideheader-child="navigation">
    <a href="/">
      <StaticLogo />
      <span class="sr-only">Zurück zur Startseite</span>
    </a>

    <a href="/notizen">
      <IconScribble />
      <span class="sr-only">Zu den Notizen</span>
    </a>
    <a href="/danksagung">
      <IconHandshake />
      <span class="sr-only">Zur Danksagung</span>
    </a>

    <a href="https://github.com/GT-Morphism"
      ><IconGithub />
      <span class="sr-only">Zum GitHub Profil</span>
    </a>

  </nav>
</header>

<style>
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

  }
</style>
