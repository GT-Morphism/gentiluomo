<script lang="ts">
  import "../styles/base.css";
  import "../styles/utilities.css";

  import { onNavigate } from "$app/navigation";

  import { setUserState } from "$lib/state-user.svelte";

  import DonHeader from "$lib/components/DonHeader.svelte";
  import DonFooter from "$lib/components/DonFooter.svelte";
  import Dialog from "$lib/components/dialog/Dialog.svelte";
  import DonToaster from "$lib/components/DonToaster.svelte";

  const { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  setUserState();
</script>

<DonToaster />

<DonHeader />

{@render children()}

<DonFooter />

<Dialog />
