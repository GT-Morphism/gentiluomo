<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    open?: boolean;
    summary: Snippet;
    children: Snippet;
  }
  const { summary, children, open = false }: Props = $props();
</script>

<details data-component="details" {open}>
  <summary data-details-child="summary">
    {@render summary()}
  </summary>

  {@render children()}
</details>

<style>
  @layer components {
    [data-component="details"] {
      --_duration: 250ms;

      [data-details-child="summary"] {
        cursor: default;

        /* removes default marker */
        list-style: none;
        filter: contrast(100%);
        transition: filter 500ms var(--ease-out-4);

        &::-webkit-details-marker {
          display: none;
        }

        &:where(:hover, :focus-visible) {
          filter: contrast(150%);
        }
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

        > [data-details-child="summary"] {
          :global([data-details-child="marker"]) {
            rotate: 0.25turn;
          }
        }
      }

      @media (prefers-reduced-motion: no-preference) {
        interpolate-size: allow-keywords;

        /*
        Since the actual `svg` element is hidden behind the icon component,
        the Svelte compiler doesn't see the `svg`. The compiler therefore removes
        the styling.
      */
        :global([data-details-child="marker"]) {
          transition: rotate 0.75s var(--ease-spring-4);
        }

        [data-details-child="summary"] {
          &:where(:hover, :focus-visible) {
            :global([data-details-child="marker"]) {
              animation: rubberBand var(--default-animation-config);
            }
          }
        }

        &::details-content {
          transition:
            content-visibility var(--_duration) allow-discrete,
            opacity var(--_duration),
            block-size var(--_duration),
            border-radius var(--_duration);
        }
      }
    }
  }
</style>
