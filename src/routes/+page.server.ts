import type { PageServerLoad } from "./$types";
import getDirectusInstance from "$lib/directus";
import { readSingleton, readFile } from "@directus/sdk";
import { languageTag } from "$lib/paraglide/runtime";

export const load: PageServerLoad = async ({ fetch, depends }) => {
	depends("paraglide:lang");
	const directus = getDirectusInstance(fetch);
	const homepage = await directus.request<{
		date_updated: string;
		hero_image: string;
		translations: {
			headline: string;
			subheadline: string;
		}[];
	}>(
		readSingleton("homepage", {
			deep: {
				translations: {
					_filter: {
						_and: [
							{
								languages_code: {
									_eq: languageTag(),
								},
							},
						],
					},
				},
			},
			fields: [
				"date_updated",
				"hero_image",
				{
					translations: ["headline", "subheadline"],
				},
			],
		}),
	);

	const heroImage = await directus.request<{
		id: string;
		description: string;
	}>(
		readFile(homepage.hero_image, {
			fields: ["*"],
		}),
	);

	return {
		headline: homepage.translations[0]?.headline,
		subheadline: homepage.translations[0]?.subheadline,
		heroImage,
	};
};
