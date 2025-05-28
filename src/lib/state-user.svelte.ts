import { getContext, setContext } from "svelte";

class User {
  #name = $state("");
  #key = "gentil-user";

  constructor() {
    if (typeof localStorage === "undefined") {
      return;
    }

    const storedValue = localStorage.getItem(this.#key);

    if (storedValue !== null) {
      this.#name = storedValue;
    }
  }

  get name() {
    return this.#name;
  }

  set name(newName: string) {
    if (newName.length === 0) {
      localStorage.removeItem(this.#key);
    } else {
      localStorage.setItem(this.#key, newName);
    }
    this.#name = newName;
  }
}

const USER_KEY = Symbol("USER");

export function setUserState() {
  return setContext(USER_KEY, new User());
}

export function getUserState() {
  return getContext<ReturnType<typeof setUserState>>(USER_KEY);
}
