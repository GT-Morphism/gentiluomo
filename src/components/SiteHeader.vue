<script setup lang="ts">
  import StaticLogo from "./StaticLogo.vue";
  interface Props {
    currentPath: string;
  }

  const { currentPath = "/" } = defineProps<Props>();
</script>

<template>
  <header
    class="bg-surface-950 after:from-primary-800 after:via-primary-500 after:to-primary-800 relative py-4 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:content-['']"
  >
    <div class="wrapper flex items-center justify-between">
      <div class="max-w-10">
        <StaticLogo />
      </div>

      <nav class="text-step-sm" aria-label="Hauptnavigation">
        <ul class="gap-x-m flex items-center">
          <li>
            <a
              href="/kurs"
              class="p-3xs rounded-md"
              :class="[
                {
                  'bg-primary-500 text-surface-950':
                    currentPath.includes('kurs'),
                },
                {
                  'hover:outline-primary-500 hover:bg-primary-500/20 focus-visible:bg-primary-500/20 hover:outline':
                    !currentPath.includes('kurs'),
                },
              ]"
              >Kurs</a
            >
          </li>
          <li>
            <a
              href="/blog"
              class="p-3xs rounded-md"
              :class="[
                {
                  'bg-primary-500 text-surface-950':
                    currentPath.includes('blog'),
                },
                {
                  'hover:outline-primary-500 hover:bg-primary-500/20 focus-visible:bg-primary-500/20 hover:outline':
                    !currentPath.includes('blog'),
                },
              ]"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/kontakt"
              class="p-3xs rounded-md"
              :class="[
                {
                  'bg-primary-500 text-surface-950':
                    currentPath.includes('kontakt'),
                },
                {
                  'hover:outline-primary-500 hover:bg-primary-500/20 focus-visible:bg-primary-500/20 hover:outline':
                    !currentPath.includes('kontakt'),
                },
              ]"
              >Kontakt</a
            >
          </li>
          <li><a href="#">Discord</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
