import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tsEslint from "typescript-eslint";

import vueParser from "vue-eslint-parser";
import astroParser from "astro-eslint-parser";

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...vue.configs["flat/recommended"],
  ...astro.configs.recommended,
  prettier,
  {
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        projectService: true,
        parser: tsEslint.parser,
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
