module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'next',
  ],
  rules: {
    'react/require-default-props': 0,
  },
}
