module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'eslint-plugin-prettier', 'import'],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    'no-lonely-if': 0,
    'react/no-multi-comp': 0,
    'import/prefer-default-export': 0,
    'import/default': 0,
    'import/no-duplicates': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 0,
    'arrow-parens': 0,
    'no-alert': 0,
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 120,
        semi: true,
      },
    ],
  },
  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js'],
      },
    },
  },
  globals: {
    expect: true,
    jest: true,
    it: true,
    describe: true,
    __DEVELOPMENT__: true,
    __CLIENT__: true,
    __SERVER__: true,
    __DISABLE_SSR__: true,
    __DEVTOOLS__: true,
    socket: true,
    webpackIsomorphicTools: true,
  },
};
