import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
    js.configs.recommended,

    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.node,
        },
    },

    {
        files: ['**/*.{test,spec}.{js,mjs,cjs}'],
        plugins: {jest},
        ...jest.configs.recommended,
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
            },
        },
    },
];
