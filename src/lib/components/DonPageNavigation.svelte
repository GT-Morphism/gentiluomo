<script lang="ts">
  import { page } from "$app/state";

  import IconMap from "~icons/lucide/map";
  import IconChevronRight from "~icons/lucide/chevron-right";
  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconFingerprint from "~icons/lucide/fingerprint";

  import DonDetails from "./DonDetails.svelte";
  import DonPathAwareLink from "./DonPathAwareLink.svelte";
</script>

<nav data-component="page-navigation">
  <ul data-pagenavigation-child="navigation-list">
    <li>
      <DonPathAwareLink href="/leitfaden" label="Leitfaden" theme="secondary" Icon={IconMap} />
    </li>

    <li>
      <DonPathAwareLink
        href="/prinzipien"
        theme="secondary"
        label="Prinzipien"
        Icon={IconFingerprint}
      />
    </li>

    <li data-pagenavigation-child="navigation-list-details">
      <DonDetails open={page.url.pathname.includes("kategorien/")}>
        {#snippet summary()}
          <div data-pagenavigation-child="navigation-list-details-header">
            <IconChevronRight data-details-child="marker" />
            <span>Kategorien</span>
          </div>
        {/snippet}

        <ul data-pagenavigation-child="navigation-list-details-body">
          <li>
            <DonPathAwareLink
              href="/kategorien/bildung"
              label="Bildung"
              theme="secondary"
              Icon={IconSquareFunction}
            />
          </li>
          <li>
            <DonPathAwareLink
              href="/kategorien/sport"
              label="Sport"
              theme="secondary"
              Icon={IconDumbbell}
            />
          </li>

          <li>
            <DonPathAwareLink
              href="/kategorien/beruf"
              label="Beruf"
              theme="secondary"
              Icon={IconNetwork}
            />
          </li>
        </ul>
      </DonDetails>
    </li>
  </ul>
</nav>

<style>
  @layer components {
    [data-component="page-navigation"] {
      position: sticky;
      translate: 0 0;
      inset-block-start: var(--spacing-2xl-3xl);
    }

    :where(
      [data-pagenavigation-child="navigation-list"],
      [data-pagenavigation-child="navigation-list-details-body"]
    ) {
      list-style: none;
      padding-inline-start: 0;
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
