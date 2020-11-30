module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['airbnb', 'prettier', 'eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'arrow-parens': ['warn', 'as-needed'], // 화살표 함수의 파라미터가 하나일때 괄호 생략
        'no-use-before-define': 'off',
        'no-unused-vars': ['off'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
        'no-console': ['off'], // 콘솔을 쓰면 에러가 나던 규칙 해제
        'react/jsx-props-no-spreading': ['warn'], // props spreading을 허용하지 않는 규칙 해제
        'no-underscore-dangle': ['off'], // camelCase를 따르는게 좋긴 하지만 `_`를 어쩔수 없이 써야하는 상황을 위해(ex 백엔드가 mongoDB)
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/prop-types': 'off', // We will use TypeScript's types for component props instead
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off', // No need to import React when using Next.js
        'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
        '@typescript-eslint/no-unused-vars': ['off'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
        '@typescript-eslint/explicit-function-return-type': [
          // I suggest this setting for requiring return types on functions only where usefull
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
  ],
};
