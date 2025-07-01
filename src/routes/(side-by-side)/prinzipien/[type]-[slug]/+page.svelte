<script lang="ts">
  import { page } from "$app/state";
  import { formatDate } from "$lib/utils/formatDate.js";
  import DonCallout from "$lib/components/DonCallout.svelte";
  import DonBadge from "$lib/components/DonBadge.svelte";
  const { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.tldr} />
  <link rel="canonical" href={page.url.origin + page.url.pathname} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.tldr} />
  <meta property="og:url" content={page.url.origin + page.url.pathname} />
</svelte:head>

<article data-layout="post" class="flow">
  <header data-post-child="header" class="flow">
    <h1>{data.meta.title}</h1>
    <div data-post-child="header-meta">
      <DonBadge label={data.meta.type} />
      <span>
        Erstellt am <time datetime={data.meta.created_at}>{formatDate(data.meta.created_at)}</time>
      </span>
      <span>
        Aktualisiert am <time datetime={data.meta.updated_at}
          >{formatDate(data.meta.updated_at)}</time
        >
      </span>
    </div>
  </header>

  <DonCallout type="tldr">
    {data.meta.tldr}
  </DonCallout>

  <div class="flow prose">
    <data.content />
  </div>
</article>

<style>
  @layer layouts {
    /* TODO: If this layout will be used for all »post«-like content, maybe consider moving it into own file. */
    [data-layout="post"] {
      /* TODO: Maybe move this styling into reusable class, since it is also used in `../+page.svelte`. */
      :global(h2) {
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
    }

    [data-post-child="header-meta"] {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--spacing-2xs-xs);

      font-size: var(--font-size-step-sm);
    }
  }
</style>
