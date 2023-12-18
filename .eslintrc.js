'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    },
  },
  plugins: [
    'ember',
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'airbnb',
  ],
  env: {
    browser: true,
  },
  rules: {
    'array-callback-return': ['off'],
    'arrow-body-style': ['error', 'always'],
    'class-methods-use-this': ['off'],
    'ember/avoid-leaking-state-in-ember-objects': ['off'],
    'ember/no-computed-properties-in-native-classes': ['off'],
    'ember/no-jquery': 'error',
    'ember/no-observers': ['off'],
    'ember/no-test-module-for': ['off'],
    'func-names': ['off'],
    'global-require': ['off'],
    'indent': ['error', 2],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'import/order': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/image-has-alt': ['off'],
    'lines-between-class-members': ['off'],
    'no-await-in-loop': ['off'],
    'no-param-reassign': ['off'],
    'no-restricted-exports': ['off'],
    'no-restricted-globals': ['off'],
    'no-restricted-syntax': ['off'],
    'no-underscore-dangle': ['off'],
    'no-unused-expressions': ['off'],
    'no-useless-escape': ['off'],
    'prefer-arrow-callback': ['off'],
    'prefer-destructuring': ['off'],
    'prefer-object-spread': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'quote-props': ['off'],
    'react/no-unused-class-component-methods': ['off'],
    'require-jsdoc': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'strict': ['off'],
    'valid-jsdoc': ['off'],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      }),
    },
  ],
};
