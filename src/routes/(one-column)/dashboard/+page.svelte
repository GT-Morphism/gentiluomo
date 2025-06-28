<script lang="ts">
  import { getUserState } from "$lib/state-user.svelte";
  import { addToast } from "$lib/components/DonToaster.svelte";

  import IconSave from "~icons/lucide/save";
  import IconDices from "~icons/lucide/dices";

  import IconTrash from "~icons/lucide/trash-2";
  import IconBadgeCheck from "~icons/lucide/badge-check";

  import DonButton from "$lib/components/DonButton.svelte";
  import DonCollapsibleCallout from "$lib/components/DonCollapsibleCallout.svelte";
  import DonInput from "$lib/components/DonInput.svelte";

  const user = getUserState();

  let editUserNameInput = $state<HTMLInputElement>();
  let newUserName = $state(user.name);

  const RANDOM_NAMES = [
    "Itachi",
    "Naruto",
    "Kakashi",
    "Gai",
    "Sasuke",
    "Madara",
    "Obito",
    "Jiraya",
  ];
</script>

<h1>Dein Bereich</h1>

<DonCollapsibleCallout tldr="Über Deine lokale Daten">
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
</DonCollapsibleCallout>

<form
  class="flow"
  onsubmit={(e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const nameFromData = data.get("name-on-website");

    if (nameFromData === null) {
      return;
    }

    if (!(typeof nameFromData === "string")) {
      return;
    }

    if (nameFromData === user.name) {
      return;
    }

    user.name = nameFromData;

    if (nameFromData === "") {
      addToast({
        data: {
          title: "Ciao 🤌🏻",
          description: "Deine Änderungen wurden übernommen",
          Icon: IconBadgeCheck,
        },
      });
      return;
    }

    addToast({
      data: {
        title: `Grazie ${user.name} 💪`,
        description: "Deine Änderungen wurden übernommen",
        Icon: IconBadgeCheck,
      },
    });
  }}
>
  <label for="name-on-website">Wie darf ich Dich denn nennen?</label>
  <div>
    <DonInput
      id="name-on-website"
      name="name-on-website"
      type="text"
      placeholder="Madara Uchiha"
      bind:value={newUserName}
      bind:ref={editUserNameInput}
    />

    <DonButton
      type="button"
      onclick={() => {
        newUserName = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)] as string;
      }}
      config="subtle"
    >
      <span class="sr-only">Generiere einen</span>Zufallsname
      <IconDices aria-hidden="true" />
    </DonButton>

    <DonButton type="button" onclick={() => (newUserName = "")} config="alert icon">
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
