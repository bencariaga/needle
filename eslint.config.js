// import eslintReact from '@eslint-react/eslint-plugin';
// import reactDom from 'eslint-plugin-react-dom';
// import reactX from 'eslint-plugin-react-x';

import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.ts', '**/*.tsx'],
        // extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked, tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked, reactHooks.configs.flat.recommended, reactRefresh.configs.vite, reactX.configs['recommended-typescript'], reactDom.configs.recommended, eslintReact.configs['recommended-typescript']],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
        plugins: {
            '@eslint-react': eslintReact,
        },
        languageOptions: {
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@eslint-react/no-missing-key': 'warn',
        },
    },
]);
