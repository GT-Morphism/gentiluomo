import { createI18n } from "@inlang/paraglide-sveltekit";
import * as runtime from "$lib/paraglide/runtime.js";

export const i18n = createI18n(runtime, {
	pathnames: {
		"/der-gentleman": {
			de: "/der-gentleman",
			en: "/the-gentleman",
		},
		"/der-gentleman/leitfaden": {
			de: "/der-gentleman/leitfaden",
			en: "/the-gentleman/roadmap",
		},
		"/der-gentleman/ratschlaege": {
			de: "/der-gentleman/ratschlaege",
			en: "/the-gentleman/advice",
		},
		"/der-entwickler": {
			de: "/der-entwickler",
			en: "/the-developer",
		},
		"/der-entwickler/leitfaden": {
			de: "/der-entwickler/leitfaden",
			en: "/the-developer/roadmap",
		},
		"/der-entwickler/ratschlaege": {
			de: "/der-entwickler/ratschlaege",
			en: "/the-developer/advice",
		},
		"/der-mentor": {
			de: "/der-mentor",
			en: "/the-mentor",
		},
		"/der-mentor/leitfaden": {
			de: "/der-mentor/leitfaden",
			en: "/the-mentor/roadmap",
		},
		"/der-mentor/ratschlaege": {
			de: "/der-mentor/ratschlaege",
			en: "/the-mentor/advice",
		},
		"/die-prinzipien": {
			de: "/die-prinzipien",
			en: "/the-principles",
		},
		"/die-prinzipien/intra-prinzipien": {
			de: "/die-prinzipien/intra-prinzipien",
			en: "/the-principles/intra-principles",
		},
		"/die-prinzipien/inter-prinzipien": {
			de: "/die-prinzipien/inter-prinzipien",
			en: "/the-principles/inter-principles",
		},
		"/kontakt": {
			de: "/kontakt",
			en: "/contact",
		},
	},
});
