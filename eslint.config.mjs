import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tsEslint from "typescript-eslint";

import svelteParser from "svelte-eslint-parser";
import astroParser from "astro-eslint-parser";
import svelteConfig from "./svelte.config.js";

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...svelte.configs["flat/recommended"],
  ...astro.configs.recommended,
  prettier,
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        projectService: true,
        parser: tsEslint.parser,
        svelteConfig,
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // https://github.com/ota-meshi/astro-eslint-parser/issues/331
        projectService: false,
        parser: tsEslint.parser,
      },
    },
  },
  {
    ignores: [".astro/", "dist/"],
  },
);
