<script lang="ts">
  import { page } from "$app/state";

  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconFingerprint from "~icons/lucide/fingerprint";
  import IconMap from "~icons/lucide/map";
  import IconGithub from "~icons/tabler/brand-github";
  import IconScribble from "~icons/tabler/scribble";
  import IconHandshake from "~icons/lucide/handshake";
</script>

<nav data-component="mobile-navigation">
  <ul data-mobilenavigation-child="main-navigation">
    <li data-mobilenavigation-child="main-navigation-item">
      <a class:current-page={page.url.pathname === "/prinzipien"} href="/prinzipien">
        <IconFingerprint />
        <span>Prinzipien</span>
      </a>
    </li>

    <li data-mobilenavigation-child="main-navigation-item">
      <span data-mobilenavigation-child="sub-navigation-label">Kategorien</span>
      <ul data-mobilenavigation-child="sub-navigation">
        <li>
          <a class:current-page={page.url.pathname === "/kategorien"} href="/kategorien">
            <IconMap />
            <span>Leitfaden</span>
          </a>
        </li>

        <li>
          <a class:current-page={page.url.pathname.includes("bildung")} href="/kategorien/bildung">
            <IconSquareFunction />
            <span>Bildung</span>
          </a>
        </li>
        <li>
          <a class:current-page={page.url.pathname.includes("sport")} href="/kategorien/sport">
            <IconDumbbell />
            <span>Sport</span>
          </a>
        </li>

        <li>
          <a class:current-page={page.url.pathname.includes("beruf")} href="/kategorien/beruf">
            <IconNetwork />
            <span>Beruf</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

<div>
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
</div>

<style>
  [data-component="mobile-navigation"] {
    font-size: var(--font-size-step-lg);
    margin-block-end: auto;

    + div {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-l-xl);
      justify-content: center;
      padding-block-start: var(--spacing-m-l);

      border-top: 2px solid var(--color-primary-500);

      a {
        color: var(--color-primary-500);
        font-size: var(--font-size-step-lg);
        padding: var(--spacing-2xs-xs);
        border-radius: calc(infinity * 1px);
        border: 1px solid var(--color-primary-500);
        background-color: var(--color-primary-950);
      }
    }
  }

  :where(
    [data-mobilenavigation-child="main-navigation"],
    [data-mobilenavigation-child="sub-navigation"]
  ) {
    list-style: none;
    padding-inline-start: 0;
  }

  [data-mobilenavigation-child="main-navigation-item"] {
    &:not(:last-child) {
      margin-block-end: var(--spacing-s-m);
    }

    > [data-mobilenavigation-child="sub-navigation-label"] {
      color: var(--color-primary-500);
      font-size: var(--font-size-step-sm);
      padding: var(--spacing-3xs-2xs);
      border: 1px solid var(--color-primary-500);
      background-color: var(--color-primary-950);
    }
  }

  [data-mobilenavigation-child="sub-navigation"] {
    display: grid;
    row-gap: var(--spacing-2xs-xs);

    background-color: oklch(from var(--color-primary-500) l c h / 0.2);
    padding-block: var(--spacing-2xs-xs);
    padding-inline: var(--spacing-xs-s);

    mask: conic-gradient(at calc(100% - calc(3rem - var(--spacing-xs-s))) 1rem, #0000 25%, #000 0);
  }

  a {
    display: inline-flex;
    column-gap: var(--spacing-xs-s);
    align-items: center;

    &.current-page {
      text-decoration: underline wavy 2px var(--color-primary-500);
      font-weight: bold;
    }

    &:not(.current-page):where(:hover, :focus-visible) {
      text-decoration: underline solid 4px var(--color-primary-500);
    }
  }
</style>
