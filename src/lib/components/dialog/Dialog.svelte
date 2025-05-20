<script lang="ts" module>
  const dialog = new Dialog();

  export const addDialog = dialog.addDialog;
  export const showDialog = dialog.showDialog;
</script>

<script lang="ts">
  import { Dialog } from "./Dialog.svelte.ts";

  import IconX from "~icons/lucide/X";
</script>

{#each dialog.dialogs as d (d.id)}
  <dialog id={d.id}>
    <form method="dialog">
      <button type="submit">
        <IconX />
        <span class="sr-only">Schließe Dialog {d.id}</span>
      </button>
    </form>
    <div>
      {@render d.snippet()}
    </div>
  </dialog>
{/each}

<style>
  dialog {
    /* reset default styling */
    width: unset;
    height: unset;
    max-width: unset;
    max-height: unset;
    background: none;
    border: none;
    padding: 0;
    overflow: clip;
    color: var(--text-main);

    position: fixed;
    inset-inline: var(--spacing-xs-s);
    inset-block: var(--spacing-xs-s);

    > div {
      --_size: 3rem;

      overflow-y: auto;

      display: flex;
      flex-direction: column;

      block-size: 100%;
      background-color: var(--color-primary-900);

      padding-inline: var(--spacing-xs-s);
      padding-block: calc(var(--_size) + var(--spacing-xs-s));

      /* reference: https://css-generators.com/custom-corners/ */
      mask: conic-gradient(at calc(100% - var(--_size)) var(--_size), #0000 25%, #000 0);
    }

    /* closed state */
    &,
    &::backdrop {
      transition:
        display 0.5s allow-discrete,
        overlay 0.5s allow-discrete,
        opacity 0.5s cubic-bezier(0.25, 0, 0.2, 1),
        translate 0.7s cubic-bezier(0.5, -0.3, 0.1, 1.5);

      opacity: 0;
    }
    & {
      translate: -100% 0;
    }

    /* open state */
    &[open] {
      opacity: 1;
      translate: 0 0;

      &::backdrop {
        opacity: 1;
      }
    }

    /* enter stage from */
    @starting-style {
      &[open],
      &[open]::backdrop {
        opacity: 0;
      }

      &[open] {
        translate: -100% 0;
      }
    }

    &::backdrop {
      background-color: oklch(from var(--color-primary-950) l c h / 0.25);
      backdrop-filter: blur(1.25rem);
    }

    form > button {
      position: absolute;
      top: 0;
      right: 0;
      font-size: var(--font-size-step-lg);
      color: var(--text-main);
      aspect-ratio: 1 / 1;

      background-color: var(--color-primary-900);
      border: 1px solid var(--color-primary-500);

      z-index: 10;
    }
  }
</style>
