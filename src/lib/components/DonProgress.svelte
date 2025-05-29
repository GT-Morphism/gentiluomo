<script lang="ts">
  import { Progress } from "melt/builders";

  interface Props {
    value: number;
  }

  const { value = $bindable() }: Props = $props();

  const progress = new Progress({
    value: () => value,
  });
</script>

<div data-component="progress" {...progress.root}>
  <div data-progress-child="indicator" {...progress.progress}></div>
</div>

<style>
  @layer components {
    [data-component="progress"] {
      block-size: var(--_height-progress-indicator, var(--spacing-3xs-2xs));

      background-color: oklch(0 0 0 / 0.25);

      border-block-end: var(--border-radius-md);
    }

    [data-progress-child="indicator"] {
      block-size: 100%;

      background-color: var(--_color-progress-indicator, var(--color-primary-500));

      translate: calc(var(--progress) * -1) 0;
    }
  }
</style>
