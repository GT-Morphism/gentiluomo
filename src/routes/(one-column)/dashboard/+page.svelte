<script lang="ts">
  import { getUserState } from "$lib/state-user.svelte";

  import IconSave from "~icons/lucide/save";
  import IconTrash from "~icons/lucide/trash-2";

  import DonButton from "$lib/components/DonButton.svelte";
  import DonCallout from "$lib/components/DonCallout.svelte";
  import DonInput from "$lib/components/DonInput.svelte";

  const user = getUserState();

  let editUserNameInput = $state<HTMLInputElement>();
</script>

<h1>Dein Bereich</h1>

<DonCallout tldr="Über Deine lokale Daten">
  {#snippet body()}
    <p>
      Alle Daten, die Du hier vorfindest, werden lokal in Deinem Browser gespeichert; keine
      Datenbanken sind involviert, keine Tools, mit denen ich Einblick in Dein <q>Nutzerverhalten</q
      > erhalte.
    </p>

    <p>
      Sofern Du möchtest, und es wäre mir eine Ehre, kannst Du mich gerne kontaktieren — und mir
      dabei gegebenenfalls Deinen Namen nennen. Dafür hast Du verschiedene Optionen:
    </p>

    <ul class="flow">
      <li>
        Trete der <a
          class="animated-underline"
          data-theme="primary"
          href="https://discord.gg/RCg4q9y7">Discord-Community</a
        > bei und schreibe mir dort;
      </li>
      <li>
        Schreibe mir eine <a
          class="animated-underline"
          data-theme="primary"
          href="mailto:me@gentiluomo.dev">E-Mail</a
        >;
      </li>
      <li>
        Über dieses Formular kannst Du Deine Gedanken direkt mit mir teilen. (Über das Formular
        schickst Du mir eine Nachricht auf Discord. Du kannst selbst entscheiden, wie <q>anonym</q> Du
        dabei sein möchtest, und auch, ob Du in den Austausch mit mir kommen möchtest.)
      </li>
    </ul>
  {/snippet}
</DonCallout>

<form
  class="flow"
  onsubmit={(e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const nameFromData = data.get("name-on-website");

    if (!nameFromData) {
      return;
    }

    if (!(typeof nameFromData === "string")) {
      return;
    }

    user.name = nameFromData;
  }}
>
  <label for="name-on-website">Wie darf ich Dich denn nennen?</label>
  <div>
    <DonInput
      id="name-on-website"
      name="name-on-website"
      type="text"
      placeholder="Madara Uchiha"
      bind:value={user.name}
      bind:ref={editUserNameInput}
    />
    <DonButton type="button" onclick={() => (user.name = "")} config="alert icon">
      <IconTrash aria-hidden="true" />
      <span class="sr-only">Namen löschen</span>
    </DonButton>
  </div>

  <DonButton type="submit" config="cta">
    Speichern
    <IconSave aria-hidden="true" />
  </DonButton>
</form>

<style>
  form {
    > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--spacing-2xs-xs);
    }
  }
</style>
