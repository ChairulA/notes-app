import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    'env': {
      'commonjs': true,
      'es2021': true,
      'node': true
    },
    'extends': [
      'airbnb-base'
    ],
    'parserOptions': {
      'ecmaVersion': 12
    },
    'rules': {
      'no-console': 'off'
    }
  }
];