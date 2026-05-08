import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: ["**/*.config.ts"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
      "react/jsx-max-props-per-line": [2, { maximum: 2 }],
      "react/jsx-closing-bracket-location": [2, "tag-aligned"],
      "react/jsx-first-prop-new-line": [2, "multiline"],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/react-in-jsx-scope": "off",
      semi: ["error"],
      indent: [
        "error",
        2,
        {
          VariableDeclarator: 1,
        },
      ],
      quotes: ["error", "single", { avoidEscape: true }],
      "jsx-quotes": ["error", "prefer-double"],
      "object-curly-spacing": ["warn", "always"],
      "object-curly-newline": ["warn", { consistent: true }],
    },
  },
]);
