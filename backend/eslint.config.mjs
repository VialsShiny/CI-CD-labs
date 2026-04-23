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
        plugins: {
            jest,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
            },
        },
        rules: {
            'jest/no-focused-tests': 'error',
            'jest/no-disabled-tests': 'warn',
            'jest/expect-expect': 'error',
        },
    },
];
