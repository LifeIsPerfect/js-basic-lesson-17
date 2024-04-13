module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest', '@stylistic/js'],
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};
