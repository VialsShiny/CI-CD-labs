import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default [
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    ...js.configs.recommended, 
    languageOptions: { 
      globals: globals.node 
    } 
  },
  
  ...js.configs.recommended,
  
  {
    files: ["**/*.{test,spec}.{js,mjs,cjs}"],
    plugins: {
      jest: jestPlugin
    },
    rules: {
      "jest/valid-expect": "error",
      "jest/valid-expect-location": "error",
      "jest/expect-expect": ["error", { "assertFunctionNames": ["expect", "expect*"] }],
      "jest/no-conditional-expect": "error",
      "jest/no-standalone-expect": "error",
      "jest/no-alias-methods": "error",
      "jest/no-mocks-import": "error",
      "jest/prefer-todo": "error",
      "jest/prefer-to-be-null-descriptor": "error",
      "jest/prefer-to-have-length": "error",
      "jest/prefer-called-with": "error",
      "jest/prefer-equality-matcher": "error",
      
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/no-jest-import": "warn",
      "jest/no-test-return-statement": "error",
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      }
    }
  }
];