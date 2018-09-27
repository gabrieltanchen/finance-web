module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'airbnb'
  ],
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  globals: {
    'andThen': true,
    'click': true,
    'currentURL': true,
    'fillIn': true,
    'Foundation': true,
    'server': true,
    'triggerEvent': true,
    'visit': true,
  },
  rules: {
    'array-callback-return': ['off'],
    'arrow-body-style': ['error', 'always'],
    'ember/avoid-leaking-state-in-ember-objects': ['off'],
    'func-names': ['off'],
    'indent': ['error', 2],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],
    'import/order': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/image-has-alt': ['off'],
    'no-restricted-globals': ['off'],
    'no-restricted-syntax': ['off'],
    'no-underscore-dangle': ['off'],
    'no-unused-expressions': ['off'],
    'prefer-arrow-callback': ['off'],
    'prefer-destructuring': ['off'],
    'prefer-promise-reject-errors': ['off'],
    'quote-props': ['off'],
    'require-jsdoc': ['off'],
    'space-before-function-paren': ['error', 'never'],
    'strict': ['off'],
    'valid-jsdoc': ['off']
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
