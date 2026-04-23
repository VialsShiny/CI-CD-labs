import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: { globals: globals.node }
  },
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs}"],
    plugins: { jest },
    extends: ["plugin:jest/recommended"],
    env: { jest: true },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
    },
  },
];