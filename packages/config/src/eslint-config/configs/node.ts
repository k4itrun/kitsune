import type { Linter } from 'eslint';
import { composer } from 'eslint-flat-config-utils';
import eslintPluginNodeRecmmended from 'eslint-plugin-n';

export default (await composer({
 ...eslintPluginNodeRecmmended.configs['flat/recommended-script'],
 name: '@billoneta/config/eslint-config/node',
 languageOptions: {
  parserOptions: {
   sourceType: 'module',
  },
 },
})
 .overrideRules({
  'n/no-unsupported-features/node-builtins': 'off',
  'n/no-missing-import': 'off',
  'n/no-extraneous-import': 'off',
  'n/no-unpublished-import': 'off',
 })
 .renamePlugins({
  n: 'node',
 })) as Linter.Config[];
