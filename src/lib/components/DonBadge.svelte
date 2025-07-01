<script lang="ts">
  interface Props {
    label: string;
    theme?: "primary" | "secondary" | "tertiary";
  }

  const { label, theme = "primary" }: Props = $props();
</script>

<span data-component="badge" data-theme={theme}>{label}</span>

<style>
  [data-component="badge"] {
    --_theme-color-light: var(--color-primary-500);
    --_theme-color-dark: var(--color-primary-800);

    &[data-theme="secondary"] {
      --_theme-color-light: var(--color-secondary-500);
      --_theme-color-dark: var(--color-secondary-800);
    }

    &[data-theme="tertiary"] {
      --_theme-color-light: var(--color-tertiary-500);
      --_theme-color-dark: var(--color-tertiary-800);
    }

    font-size: var(--font-size-step-sm);

    background-color: oklch(from var(--_theme-color-dark) l c h / 0.25);
    border: 1px solid var(--_theme-color-light);
    border-radius: calc(infinity * 1px);

    padding: var(--spacing-3xs-2xs);
  }
</style>
