module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
  ],
  rules: {
    curly: ['error', 'all'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'require-await': ['error'],
    eqeqeq: ['error', 'smart'],
    'no-console': ['warn'],
    'no-param-reassign': ['warn'],
    'no-unused-expressions': ['error'],
    // This is superseded with @typescript-eslint rule variant
    'no-shadow': 'off',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '+(src|tests)/**',
            group: 'internal',
          },
        ],

        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],

    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_.*$',
      },
    ],
    '@typescript-eslint/no-this-alias': ['warn'],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Number: false,
          String: false,
        },
        extendDefaults: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.json', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
}