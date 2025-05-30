<script lang="ts">
  import { page } from "$app/state";

  import IconHome from "~icons/lucide/home";
  import IconChevronRight from "~icons/lucide/chevron-right";
  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconFingerprint from "~icons/lucide/fingerprint";
  import IconMap from "~icons/lucide/map";

  import DonDetails from "./DonDetails.svelte";
</script>

<nav data-component="page-navigation">
  <ul data-pagenavigation-child="navigation-list">
    <li>
      <a class:current-page={page.url.pathname === "/"} href="/">
        <IconHome />
        <span>Home</span>
      </a>
    </li>

    <li>
      <a class:current-page={page.url.pathname === "/prinzipien"} href="/prinzipien">
        <IconFingerprint />
        <span>Prinzipien</span>
      </a>
    </li>

    <li data-pagenavigation-child="navigation-list-details">
      <DonDetails open={page.url.pathname.includes("kategorien")}>
        {#snippet summary()}
          <div data-pagenavigation-child="navigation-list-details-header">
            <IconChevronRight data-details-child="marker" />
            <span>Kategorien</span>
          </div>
        {/snippet}

        <ul data-pagenavigation-child="navigation-list-details-body">
          <li>
            <a class:current-page={page.url.pathname === "/kategorien"} href="/kategorien">
              <IconMap />
              <span>Leitfaden</span>
            </a>
          </li>

          <li>
            <a
              class:current-page={page.url.pathname.includes("bildung")}
              href="/kategorien/bildung"
            >
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
      </DonDetails>
    </li>
  </ul>
</nav>

<style>
  @layer components {
    ul {
      list-style: none;
      padding-inline-start: 0;
    }

    a {
      display: inline-flex;
      column-gap: var(--spacing-2xs-xs);
      align-items: center;

      border-radius: calc(infinity * 1px);

      &.current-page {
        text-decoration: underline wavy 2px var(--color-secondary-500);
        font-weight: bold;
      }

      &:not(.current-page):where(:hover, :focus-visible) {
        text-decoration: underline solid 4px var(--color-secondary-500);
      }
    }
  }

  @layer components {
    [data-component="page-navigation"] {
      position: sticky;
      translate: 0 0;
      inset-block-start: var(--spacing-2xl-3xl);
    }

    [data-pagenavigation-child="navigation-list"] {
      display: grid;
      row-gap: var(--spacing-xs-s);
    }

    [data-pagenavigation-child="navigation-list-details"] {
      --_summary-open-bg-color: oklch(from var(--color-secondary-500) l c h / 0.5);
      --_details-content-bg-color: oklch(from var(--color-secondary-800) l c h / 0.2);
    }

    [data-pagenavigation-child="navigation-list-details-header"] {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-2xs-xs);
    }

    [data-pagenavigation-child="navigation-list-details-body"] {
      display: grid;
      row-gap: var(--spacing-2xs-xs);

      /* For firefox (see: https://caniuse.com/?search=details-content) */
      @supports not selector(::details-content) {
        background-color: var(--_details-content-bg-color);
      }

      border-inline-start: 2px solid var(--color-secondary-500);
      padding-block: var(--spacing-2xs-xs);
      padding-inline: var(--spacing-xs-s);
    }
  }
</style>
