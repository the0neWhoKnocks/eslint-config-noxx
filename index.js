module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    ecmaVersion: 2018, // adds async/await & spread support
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'jsdoc',
    'react',
  ],
  // https://eslint.org/docs/rules/
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    indent: [
      'error',
      2,
      {
        MemberExpression: 1,
        SwitchCase: 1,
      }
    ],
    'jsdoc/require-returns-description': 0,
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      }
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'no-console': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-spaced-func': 2,
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      }
    ],
    'no-useless-concat': 'error',
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      }
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      }
    ],
    quotes: [
      'error',
      'single',
      {
        //allowTemplateLiterals: true,
        avoidEscape: true,
      }
    ],
    semi: [
      'error',
      'always',
    ],
    'spaced-comment': [
      'error',
      'always',
    ],
    'template-curly-spacing': [
      'error',
      'always',
    ],
  }
};
