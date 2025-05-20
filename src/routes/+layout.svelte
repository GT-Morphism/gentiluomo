<script lang="ts">
  import "../styles/base.css";
  import "../styles/utilities.css";

  import { onNavigate } from "$app/navigation";

  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import Dialog from "$lib/components/dialog/Dialog.svelte";

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
</script>

<SiteHeader />

{@render children()}

<SiteFooter />

<Dialog />
