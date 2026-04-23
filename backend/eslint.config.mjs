import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {js},
        extends: ['js/recommended'],
        languageOptions: {globals: globals.node},
    },
    {
        files: ['**/*.{test,spec}.{js,mjs,cjs}'],
        plugins: {jest},
        extends: [jest.configs['flat/recommended']],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/no-disabled-tests': 'warn',
            'jest/no-focused-tests': 'error',
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...jest.environments.globals.globals,
            },
        },
    },
]);
