<script lang="ts" module>
  type ToastData = {
    title: string;
    description: string;
    Icon?: Component;
  };

  const toaster = new Toaster<ToastData>();

  export const addToast = toaster.addToast;
</script>

<script lang="ts">
  import { Toaster } from "melt/builders";

  import IconX from "~icons/lucide/X";

  import DonButton from "./DonButton.svelte";
  import DonProgress from "./DonProgress.svelte";
  import type { Component } from "svelte";
</script>

<div data-component="toaster" {...toaster.root}>
  {#each toaster.toasts as toast (toast.id)}
    <div data-component="toast" {...toast.content}>
      {#if toast.data.Icon}
        {@const Icon = toast.data.Icon}
        <div data-toast-child="icon" style="display: contents">
          <Icon aria-hidden="true" />
        </div>
      {/if}

      <div data-toast-child="body">
        <p {...toast.title}>{toast.data.title}</p>
        <div {...toast.description}>{toast.data.description}</div>
      </div>

      <DonButton {...toast.close} data-button-config="subtle icon round small">
        <IconX aria-hidden="true" />
        <span class="sr-only">Toast schließen</span>
      </DonButton>

      <div data-toast-child="progress">
        <DonProgress value={toast.percentage} />
      </div>
    </div>
  {/each}
</div>

<style>
  @layer components {
    [data-component="toaster"] {
      --_height-progress-indicator: 0.5rem;

      inset: unset;
      inset-block-end: var(--spacing-xs-s);
      inset-inline-end: var(--spacing-xs-s);

      inline-size: min(calc(100% - 2 * var(--spacing-xs-s)), 30rem);

      display: grid;
      row-gap: var(--spacing-xs-s);

      color: inherit;
      background-color: transparent;

      border: none;
      padding: 0;
    }

    [data-component="toast"] {
      position: relative;

      display: grid;
      grid-template-columns: 1fr auto;
      &:has([data-toast-child="icon"]) {
        grid-template-columns: auto 1fr auto;
      }
      place-items: start;
      column-gap: var(--spacing-3xs-2xs);

      background-color: var(--color-primary-950);

      border: 1px solid var(--color-primary-800);
      border-radius: var(--border-radius-md);

      padding-block-start: var(--spacing-2xs-xs);
      padding-block-end: calc(var(--spacing-2xs-xs) + var(--_height-progress-indicator));
      padding-inline: var(--spacing-2xs-xs);

      overflow: clip;
    }

    [data-toast-child="icon"] {
      color: var(--color-primary-500);
    }

    [data-toast-child="progress"] {
      position: absolute;
      inset-inline: 0;
      bottom: 0;
    }
  }
</style>
