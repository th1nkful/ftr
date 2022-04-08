module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': 'off',
    'max-params': ['error', 4],
    'function-paren-newline': ['error', 'consistent'],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  ],
};
