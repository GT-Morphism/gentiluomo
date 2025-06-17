<script lang="ts">
  import IconNotedpadText from "~icons/lucide/notepad-text";
</script>

<h1>Prinzipien</h1>

<aside>
  <div>
    <IconNotedpadText />
    <span>In Kurz</span>
  </div>

  <p>
    A very quiet little sky. Every highlight needs its own private shadow. Just go around and try
    them all. Don't want to destroy, just diffuse. That's the most fun of all. We never duplicate
    anything exactly. Maybe there's a happy little tree... he lives right there. Think like a cloud.
    How beautifully it works! Today, I want softness in our world... tranquility, quiet, peaceful.
  </p>
</aside>

<section class="flow prose">
  <h2>Wieso Prinzipien?</h2>

  <p>
    A very <strong>quiet little sky</strong>. Every highlight needs its own private shadow. Just go
    around and try them all. Don't want to destroy, just diffuse. That's the most fun of all. We
    never duplicate anything exactly. Maybe there's a happy little tree... he lives right there.
    Think like a cloud. How beautifully it works! Today, I want softness in our world...
    tranquility, quiet, peaceful.
  </p>

  <p>
    A very quiet little sky. Every highlight needs its own private shadow. Just go around and try
    them all. Don't want to destroy, just diffuse. That's the most fun of all. We never duplicate
    anything exactly. Maybe there's a happy little tree... he lives right there. Think like a cloud.
  </p>
</section>

<section>
  <h2>Intrapersonell oder: bezogen auf mich</h2>
</section>

<section>
  <h2>Interpersonell oder: bezogen auf andere</h2>
</section>

<style>
  aside {
    display: grid;
    grid-template-rows: auto 1fr;

    > div {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-3xs-2xs);

      inline-size: fit-content;

      background-color: var(--color-primary-800);

      padding: calc(var(--spacing-3xs-2xs) / 2);
    }

    > p {
      border-inline-start: calc(var(--spacing-3xs-2xs) / 2) solid var(--color-primary-500);

      background-color: oklch(from var(--color-primary-800) l c h / 0.25);

      padding: var(--spacing-xs-s);
    }
  }

  strong {
    background-color: var(--color-primary-500);
    color: var(--background-main);

    padding-inline: 0.125em;
    padding-block: 0.1em;
  }

  h2 {
    font-size: var(--font-size-heading-regular);

    &::before {
      content: "";
    }
  }
</style>
