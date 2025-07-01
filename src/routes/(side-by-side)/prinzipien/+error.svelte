<script lang="ts">
  import type { PrincipleMetadata } from "~content/content.types";
  import { page } from "$app/state";
  import { formatDate } from "$lib/utils/formatDate";
  import DonBadge from "$lib/components/DonBadge.svelte";

  const { data }: { data: { principles: PrincipleMetadata[] } } = $props();
</script>

<h1>Ich entschuldige mich für die Umstände.</h1>
<p>{page.error?.message}</p>

<!-- TODO: Maybe only show last 5 elements (if so, should be limited inside `./+layout.server.ts` or maybe add to endpoint `api/content/prinzipien` a query parameter for that). -->
{#each data.principles as principle (principle.type + "-" + principle.slug)}
  <article class="flow">
    <h2>{principle.title}</h2>

    <p>{principle.description}</p>

    <a class="animated-underline" href="/prinzipien/{principle.type}-{principle.slug}"
      >Mehr erfahren</a
    >

    <footer>
      <DonBadge label={principle.type} />

      <span>
        Erstellt am <time datetime={principle.created_at}>{formatDate(principle.created_at)}</time>
      </span>
      <span>
        Aktualisiert am <time datetime={principle.updated_at}
          >{formatDate(principle.updated_at)}</time
        >
      </span>
    </footer>
  </article>
{/each}

<style>
  article {
    background-color: var(--color-primary-900);
    padding-block: var(--spacing-3xs-2xs);
    padding-inline: var(--spacing-2xs-xs);
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--spacing-2xs-xs);

    border-block-start: 1px solid var(--color-primary-500);

    padding-block-start: var(--spacing-2xs-xs);

    font-size: var(--font-size-step-sm);
  }
</style>
