import type { ShortcutConfig } from "$lib/utils/shortcuts.svelte";

export const NAVIGATION_SHORTCUTS: ShortcutConfig[] = [
	// GENTLEMAN SHORTCUTS
	{
		href: "/der-gentleman",
		firstKey: "g",
		secondKey: "g",
	},
	{
		href: "/der-gentleman/leitfaden",
		firstKey: "g",
		secondKey: "l",
	},
	{
		href: "/der-gentleman/ratschlaege",
		firstKey: "g",
		secondKey: "r",
	},
	// DEVELOPER SHORTCUTS
	{
		href: "/der-entwickler",
		firstKey: "e",
		secondKey: "e",
	},
	{
		href: "/der-entwickler/leitfaden",
		firstKey: "e",
		secondKey: "l",
	},
	{
		href: "/der-entwickler/ratschlaege",
		firstKey: "e",
		secondKey: "r",
	},
	// MENTOR SHORTCUTS
	{
		href: "/der-mentor",
		firstKey: "m",
		secondKey: "m",
	},
	{
		href: "/der-mentor/leitfaden",
		firstKey: "m",
		secondKey: "l",
	},
	{
		href: "/der-mentor/ratschlaege",
		firstKey: "m",
		secondKey: "r",
	},
	// PRINCIPLES SHORTCUTS
	{
		href: "/die-prinzipien",
		firstKey: "p",
		secondKey: "p",
	},
	{
		href: "/die-prinzipien/intra-prinzipien",
		firstKey: "p",
		secondKey: "a",
	},
	{
		href: "/die-prinzipien/inter-prinzipien",
		firstKey: "p",
		secondKey: "r",
	},
	// OTHER SHORTCUTS
	{
		href: "/kontakt",
		firstKey: "k",
		secondKey: "k",
	},
];
