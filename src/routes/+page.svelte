<script lang="ts">
  import IconSquareFunction from "~icons/lucide/square-function";
  import IconDumbbell from "~icons/lucide/dumbbell";
  import IconNetwork from "~icons/lucide/network";
  import IconLayoutDashboard from "~icons/lucide/layout-dashboard";

  import DonCard from "$lib/components/DonCard.svelte";
</script>

<svelte:head>
  <title>gentiluomo | Startseite</title>
  <meta
    name="description"
    content="Endlich ein Mentor für all diejenigen, die sich machtlos oder weniger privilegiert fühlen."
  />
</svelte:head>

<main class="wrapper flow">
  <h1>Wie kann ich Dir behilflich sein?</h1>

  <ul>
    <li>
      <DonCard
        title="Bildung"
        description="That'll be a challenge! Go out and spend some time talking to a tree."
        href="/kategorien/bildung"
        Icon={IconSquareFunction}
      />
    </li>

    <li>
      <DonCard
        title="Sport"
        description="Let me tell you what I've got going on up here. Feel the power of the water."
        theme="secondary"
        href="/kategorien/sport"
        Icon={IconDumbbell}
      />
    </li>

    <li>
      <DonCard
        title="Beruf"
        description="
        No use stopping, we're so much fun here with these trees! Wind it up, blend it together."
        theme="tertiary"
        href="/kategorien/beruf"
        Icon={IconNetwork}
      />
    </li>
  </ul>

  <aside class="wrapper" data-max-width="prose">
    <IconLayoutDashboard aria-hidden="true" />
    <p>
      Personalisiere Deine Erfahrung im <a class="animated-underline" href="/dashboard">Dashboard</a
      >
    </p>
  </aside>
</main>

<style>
  h1 {
    text-align: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs-s);

    list-style: none;
    padding-inline-start: 0;

    > * {
      flex: 1 1 250px;
    }
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: var(--spacing-2xs-xs);

    color: oklch(from var(--color-surface-950) 75% c h);

    border-block-start: 1px solid oklch(from var(--color-surface-950) 50% c h / 0.25);

    padding-block-start: var(--spacing-xs-s);
  }
</style>
