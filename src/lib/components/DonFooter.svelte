<script lang="ts">
  import IconNotebookText from "~icons/lucide/notebook-text";
  import IconHandshake from "~icons/lucide/handshake";
  import IconLayoutDashboard from "~icons/lucide/layout-dashboard";

  import DonPathAwareLink from "./DonPathAwareLink.svelte";
</script>

<footer data-component="footer">
  <div class="wrapper">
    <div data-footer-child="navigation-list-container">
      <ul data-footer-child="navigation-list navigation-list-row">
        <li>
          <DonPathAwareLink
            href="/leitfaden"
            label="Leitfaden"
            config={["with-small-font", "with-visible-label"]}
          />
        </li>
        <li>
          <DonPathAwareLink
            href="/prinzipien"
            label="Prinzipien"
            config={["with-small-font", "with-visible-label"]}
          />
        </li>
      </ul>

      <ul data-footer-child="navigation-list navigation-list-row">
        <li>
          <DonPathAwareLink
            href="/kategorien/bildung"
            label="Bildung"
            theme="secondary"
            config={["with-small-font", "with-visible-label"]}
          />
        </li>
        <li>
          <DonPathAwareLink
            href="/kategorien/sport"
            label="Sport"
            theme="secondary"
            config={["with-small-font", "with-visible-label"]}
          />
        </li>
        <li>
          <DonPathAwareLink
            href="/kategorien/beruf"
            label="Beruf"
            theme="secondary"
            config={["with-small-font", "with-visible-label"]}
          />
        </li>
      </ul>

      <ul data-footer-child="navigation-list navigation-list-row">
        <li>
          <DonPathAwareLink
            Icon={IconNotebookText}
            href="/notizen"
            label="Zu den Notizen"
            theme="tertiary"
            config={["with-icon-only", "with-animated-shadow"]}
          />
        </li>
        <li>
          <DonPathAwareLink
            Icon={IconHandshake}
            href="/danksagung"
            label="Zur Danksagung"
            theme="tertiary"
            config={["with-icon-only", "with-animated-shadow"]}
          />
        </li>
        <li>
          <DonPathAwareLink
            Icon={IconLayoutDashboard}
            href="/dashboard"
            label="Zum Dashboard"
            theme="tertiary"
            config={["with-icon-only", "with-animated-shadow"]}
          />
        </li>
      </ul>
    </div>

    <p data-footer-child="copyright">
      © {new Date().getFullYear()}
      <span>gentiluomo</span>
      <span>|</span> Alle Rechte vorbehalten
    </p>
  </div>
</footer>

<style>
  @layer components {
    [data-component="footer"] {
      --_spacing: var(--spacing-s-m);

      background-color: oklch(from var(--color-primary-900) l c h / 0.5);

      border-block-start: 1px solid var(--color-primary-500);

      padding-block-start: calc(2 * var(--_spacing));
      padding-block-end: var(--_spacing);
    }

    [data-footer-child="navigation-list-container"] {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--_spacing);
    }

    [data-footer-child~="navigation-list"] {
      list-style: none;
      padding-inline-start: 0;

      flex: 1 1 150px;
    }

    [data-footer-child~="navigation-list-row"] {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: var(--spacing-xs-s);
    }

    [data-footer-child="copyright"] {
      color: oklch(from var(--color-surface-950) 75% c h);
      font-size: var(--font-size-step-sm);

      text-align: center;

      margin-block-start: calc(2 * var(--_spacing));

      border-block-start: 1px solid oklch(from var(--color-surface-950) 50% c h / 0.25);

      padding-block-start: var(--_spacing);
    }
  }
</style>
