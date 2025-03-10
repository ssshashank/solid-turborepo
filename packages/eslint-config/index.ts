import js from '@eslint/js';
import solid from 'eslint-plugin-solid';
import globals from 'globals';
import ts from 'typescript-eslint';

export const config = ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...solid.configs['flat/recommended'],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    }
);
