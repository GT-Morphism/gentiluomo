import type { Snippet } from "svelte";
import { SvelteMap } from "svelte/reactivity";

export class Dialog {
  // TODO: Maybe consider changing the name of the map, since it is not really holding dialogs, is it?
  #dialogsMap = new SvelteMap<string, { id: string; snippet: Snippet }>();

  dialogs = $derived(Array.from(this.#dialogsMap.values()));

  addDialog = (id: string, snippet: Snippet) => {
    this.#dialogsMap.set(id, { id, snippet });
  };

  // TODO: Should this even be a method of the class? I am asking, since
  // `showDialog` is not referring to anything of the class `Dialog`.
  showDialog(id: string) {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    dialog.showModal();
  }
}
