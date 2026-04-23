import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    js.configs.recommended,

    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },

    {
        files: ['**/*.{js,jsx}'],
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'no-unused-vars': 'warn',
        },
    },

    {
        files: ['babel.config.js', 'jest.config.js', 'src/__tests__/**/*'],
        languageOptions: {
            globals: globals.node,
        },
    },

    {
        files: ['**/*.{test,spec}.{js,jsx}'],
        plugins: {
            jest,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
            },
        },
        rules: {
            'jest/no-focused-tests': 'error',
            'jest/no-disabled-tests': 'warn',
            'jest/expect-expect': 'error',
        },
    },
]);
