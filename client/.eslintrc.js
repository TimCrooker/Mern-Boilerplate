module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": [
      'warn',
      {
        semi: false,
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'auto',
        tabWidth: 2,
      },
    ]
  },
};
