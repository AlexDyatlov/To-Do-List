module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    'react/prop-types': 'off',
    'eol-last': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'multiline-ternary': 'off',
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
