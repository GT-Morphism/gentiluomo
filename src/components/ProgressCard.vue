<template>
  <article
    class="before:from-primary-800 before:via-primary-500 before:to-primary-800 after:bg-primary-500/50 relative before:absolute before:-inset-1 before:-z-10 before:rounded-md before:bg-gradient-to-b before:content-[''] after:absolute after:inset-0 after:-z-20 after:blur-xl after:content-['']"
    aria-labelledby="progress-card-title"
  >
    <div class="bg-surface-950 px-s py-m gap-y-m-l grid rounded-md">
      <header id="progress-card-title" class="text-step-lg text-center">
        Deine aktuelle Statistik
      </header>

      <div>
        <ul class="flow">
          <li
            class="grid grid-cols-[auto_1fr_auto] items-center"
            aria-label="5 von 12 Kurs-Kapitel abgeschlossen"
          >
            <span>Fortschritt Kurs</span>
            <span
              class="from-secondary-950 via-secondary-500/50 to-secondary-950 mx-2 h-0.5 bg-gradient-to-r"
              aria-hidden="true"
            />
            <span>5 / 12</span>
          </li>
          <li class="grid grid-cols-[auto_1fr_auto] items-center">
            <span>Coolness</span>
            <span
              class="from-secondary-950 via-secondary-500/50 to-secondary-950 mx-2 h-0.5 bg-gradient-to-r"
              aria-hidden="true"
            />
            <span>10</span>
          </li>
          <li
            class="grid grid-cols-[auto_1fr_auto] items-center"
            aria-label="1 von 10 Easter Eggs entdeckt"
          >
            <span>Easter Eggs entdeckt</span>
            <span
              class="from-secondary-950 via-secondary-500/50 to-secondary-950 mx-2 h-0.5 bg-gradient-to-r"
              aria-hidden="true"
            />
            <span>1 / 10</span>
          </li>
        </ul>
      </div>

      <footer class="text-step-sm flex items-center justify-around">
        <a
          class="after:bg-secondary-500/20 decoration-secondary-500 relative isolate underline decoration-dashed underline-offset-4 after:absolute after:inset-0 after:-z-10 after:origin-left after:scale-x-0 after:content-[''] hover:decoration-solid hover:after:scale-x-100 focus-visible:decoration-solid focus-visible:after:scale-x-100 after:motion-safe:transition-transform after:motion-safe:duration-300"
          href="/kurs"
          >Zum Kurs</a
        >
        <a
          class="after:bg-secondary-500/20 decoration-secondary-500 relative isolate underline decoration-dashed underline-offset-4 after:absolute after:inset-0 after:-z-10 after:origin-left after:scale-x-0 after:content-[''] hover:decoration-solid hover:after:scale-x-100 focus-visible:decoration-solid focus-visible:after:scale-x-100 after:motion-safe:transition-transform after:motion-safe:duration-300"
          href="/blog"
          >Zum Blog</a
        >
        <button
          class="bg-primary-500 p-3xs after:bg-primary-500 relative isolate rounded-md text-black after:absolute after:inset-0 after:-z-10 after:opacity-0 after:blur-md hover:after:opacity-100 focus-visible:after:opacity-100 active:scale-95 motion-safe:transition-transform motion-safe:duration-300 after:motion-safe:transition-opacity after:motion-safe:duration-300"
          type="button"
        >
          Statistik zurücksetzen
        </button>
      </footer>
    </div>
  </article>
</template>
