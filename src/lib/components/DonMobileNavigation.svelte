<script lang="ts">
  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconFingerprint from "~icons/lucide/fingerprint";
  import IconMap from "~icons/lucide/map";
  import IconLayoutDashboard from "~icons/lucide/layout-dashboard";
  import IconNotebookText from "~icons/lucide/notebook-text";
  import IconHandshake from "~icons/lucide/handshake";

  import DonPathAwareLink from "./DonPathAwareLink.svelte";
</script>

<nav data-component="mobile-navigation">
  <ul data-mobilenavigation-child="main-navigation">
    <li data-mobilenavigation-child="main-navigation-item">
      <DonPathAwareLink href="/leitfaden" label="Leitfaden" Icon={IconMap} />
    </li>

    <li data-mobilenavigation-child="main-navigation-item">
      <DonPathAwareLink href="/prinzipien" label="Prinzipien" Icon={IconFingerprint} />
    </li>

    <li data-mobilenavigation-child="main-navigation-item">
      <span data-mobilenavigation-child="sub-navigation-label">Kategorien</span>
      <ul data-mobilenavigation-child="sub-navigation">
        <li>
          <DonPathAwareLink href="/kategorien/bildung" label="Bildung" Icon={IconSquareFunction} />
        </li>

        <li>
          <DonPathAwareLink href="/kategorien/sport" label="Sport" Icon={IconDumbbell} />
        </li>

        <li>
          <DonPathAwareLink href="/kategorien/beruf" label="Beruf" Icon={IconNetwork} />
        </li>
      </ul>
    </li>
  </ul>
</nav>

<div>
  <DonPathAwareLink
    href="/notizen"
    label="Zu den Notizen"
    config={["with-icon-only", "with-icon-lg", "with-color", "with-visible-border"]}
    Icon={IconNotebookText}
  />

  <DonPathAwareLink
    href="/danksagung"
    label="Zur Danksagung"
    config={["with-icon-only", "with-icon-lg", "with-color", "with-visible-border"]}
    Icon={IconHandshake}
  />

  <DonPathAwareLink
    href="/dashboard"
    label="Zum Dashboard"
    config={["with-icon-only", "with-icon-lg", "with-color", "with-visible-border"]}
    Icon={IconLayoutDashboard}
  />
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
</style>
