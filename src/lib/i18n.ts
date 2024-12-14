import { createI18n } from "@inlang/paraglide-sveltekit";
import * as runtime from "$lib/paraglide/runtime.js";

export const i18n = createI18n(runtime, {
	pathnames: {
		"/der-gentleman": {
			de: "/der-gentleman",
			en: "/the-gentleman",
		},
		"/der-entwickler": {
			de: "/der-entwickler",
			en: "/the-developer",
		},
		"/der-mentor": {
			de: "/der-mentor",
			en: "/the-mentor",
		},
		"/die-prinzipien": {
			de: "/die-prinzipien",
			en: "/the-principles",
		},
		"/kontakt": {
			de: "/kontakt",
			en: "/contact",
		},
	},
});
