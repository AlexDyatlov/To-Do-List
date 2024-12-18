module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['!.storybook'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'react/prop-types': 'off',
    'eol-last': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'multiline-ternary': 'off',
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
