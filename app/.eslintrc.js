module.exports = {
  root: true,
  plugins: [],
  extends: [
    'react-app',
    // "airbnb",
    // "airbnb/hooks",
    'react-app/jest',
  ],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    eqeqeq: 'warn',
    camelcase: 'warn',
    'no-restricted-imports': [
      'warn',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
      },
    },
  ],
}
