<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  interface Props {
    chapters: CollectionEntry<"chapters">[];
    currentPath: string;
  }

  const { chapters, currentPath = "/kurs" }: Props = $props();
</script>

<aside
  class="top-m-l before:from-primary-800 before:via-primary-500 before:to-primary-800 sticky h-fit before:absolute before:top-0 before:h-full before:w-1 before:bg-gradient-to-b"
>
  <ol class="text-step-sm flow ps-4">
    <li>
      <a
        class="before:from-secondary-800 before:via-secondary-500 before:to-secondary-800 relative before:absolute before:inset-x-0 before:-bottom-px before:h-0.5 before:origin-left before:bg-gradient-to-r before:content-[''] motion-safe:before:transition-transform motion-safe:before:duration-300 {currentPath ===
        '/kurs'
          ? 'before:scale-x-100'
          : 'before:scale-x-0 hover:before:scale-x-100 focus-visible:before:scale-x-100'}"
        href="/kurs">Übersicht</a
      >
    </li>
    {#each chapters as chapter (chapter.id)}
      <li>
        <a
          class="before:from-secondary-800 before:via-secondary-500 before:to-secondary-800 relative before:absolute before:inset-x-0 before:-bottom-px before:h-0.5 before:origin-left before:bg-gradient-to-r before:content-[''] motion-safe:before:transition-transform motion-safe:before:duration-300 {currentPath.includes(
            chapter.id,
          )
            ? 'before:scale-x-100'
            : 'before:scale-x-0 hover:before:scale-x-100 focus-visible:before:scale-x-100'}"
          href={`/kurs/${chapter.id}`}>{chapter.data.title}</a
        >
      </li>
    {/each}
  </ol>
</aside>
