<script lang="ts">
	import { PUBLIC_DIRECTUS_API_URL } from "$env/static/public";
	const { data } = $props();
</script>

<h1>{data.headline}</h1>
<p>{data.subheadline}</p>
<img
	src="{PUBLIC_DIRECTUS_API_URL}/assets/{data.heroImage.id}?width=400"
	alt={data.heroImage.description}
/>
