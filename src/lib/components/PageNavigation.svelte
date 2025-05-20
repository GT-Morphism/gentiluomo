<script lang="ts">
  import { page } from "$app/state";

  import IconHome from "~icons/lucide/home";
  import IconChevronRight from "~icons/lucide/chevron-right";
  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconFingerprint from "~icons/lucide/fingerprint";
  import IconMap from "~icons/lucide/map";
</script>

<nav data-sidebar-child="navigation">
  <ul data-sidebar-child="navigation-list">
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

    <li>
      <details
        data-sidebar-child="navigation-list-details"
        open={page.url.pathname.includes("kategorien")}
      >
        <summary>
          <IconChevronRight />
          <span>Kategorien</span>
        </summary>
        <ul>
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
      </details>
    </li>
  </ul>
</nav>

<style>
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

  details {
    inline-size: 100%;
    --_duration: 0.2s;

    summary {
      cursor: default;
      display: flex;
      align-items: center;
      column-gap: var(--spacing-2xs-xs);

      /* removes default marker */
      list-style: none;

      /*
        Since the actual `svg` element is hidden behind the icon component,
        the Svelte compiler doesn't see the `svg`. The compiler therefore removes
        the styling.
      */
      > :global(svg) {
        transition: rotate 0.75s var(--ease-spring-4);
      }

      &::-webkit-details-marker {
        display: none;
      }
    }

    > ul {
      display: grid;
      row-gap: var(--spacing-2xs-xs);

      border-inline-start: 2px solid var(--color-secondary-500);
      padding-block: var(--spacing-2xs-xs);
      padding-inline: var(--spacing-xs-s);
    }

    &::details-content {
      block-size: 0;
      opacity: 0;
    }

    &[open] {
      &::details-content {
        block-size: auto;
        opacity: 1;
      }

      > summary {
        background-color: oklch(from var(--color-secondary-500) l c h / 0.5);
        > :global(svg) {
          rotate: 0.25turn;
        }
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      interpolate-size: allow-keywords;

      &::details-content {
        transition:
          content-visibility var(--_duration) allow-discrete,
          opacity var(--_duration),
          block-size var(--_duration),
          border-radius var(--_duration);
      }
    }
  }

  @layer components {
    [data-sidebar-child="navigation"] {
      position: sticky;
      translate: 0 0;
      inset-block-start: var(--spacing-2xl-3xl);
    }

    [data-sidebar-child="navigation-list"] {
      display: grid;
      row-gap: var(--spacing-xs-s);
    }

    [data-sidebar-child="navigation-list-details"] {
      &::details-content {
        background-color: oklch(from var(--color-secondary-800) l c h / 0.2);
      }
    }
  }
</style>
