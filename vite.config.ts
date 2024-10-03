import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		paraglide({
			project: "./gentiluomo.inlang",
			outdir: "./src/lib/paraglide",
		}),
		sveltekit(),
		tailwindcss(),
	],
});
