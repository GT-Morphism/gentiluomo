<script lang="ts">
  import DonCallout from "$lib/components/DonCallout.svelte";
</script>

<h1>Prinzipien</h1>

<DonCallout type="tldr">
  A very quiet little sky. Every highlight needs its own private shadow. Just go around and try them
  all. Don't want to destroy, just diffuse. That's the most fun of all. We never duplicate anything
  exactly. Maybe there's a happy little tree... he lives right there. Think like a cloud. How
  beautifully it works! Today, I want softness in our world... tranquility, quiet, peaceful.
</DonCallout>

<h2>Wieso Prinzipien?</h2>

<p>
  A very <strong>quiet little sky</strong>. Every highlight needs its own private shadow. Just go
  around and try them all. Don't want to destroy, just diffuse. That's the most fun of all. We never
  duplicate anything exactly. Maybe there's a happy little tree... he lives right there. Think like
  a cloud. How beautifully it works! Today, I want softness in our world... tranquility, quiet,
  peaceful.
</p>

<p>
  A very quiet little sky. Every highlight needs its own private shadow. Just go around and try them
  all. Don't want to destroy, just diffuse. That's the most fun of all. We never duplicate anything
  exactly. Maybe there's a happy little tree... he lives right there. Think like a cloud.
</p>

<h2>Intrapersonell oder: bezogen auf mich</h2>

<h2>Interpersonell oder: bezogen auf andere</h2>

<style>
  h2 {
    font-size: var(--font-size-heading-regular);

    &::before {
      content: "";
      display: block;
      inline-size: min(calc(4rem + var(--spacing-l-xl)), 100%);
      block-size: 0.5rem;

      margin-block-end: var(--spacing-xs-s);

      background-color: var(--color-primary-500);
      /* inspired by: https://martijnhols.nl/blog */
      transform: skew(-15deg);
    }
  }
</style>
