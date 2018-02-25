module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'jest',
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
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      }
    ],
    'keyword-spacing': [
      'error',
      {
        overrides: {
          catch: {
            after: false,
            before: false,
          },
          else: {
            after: false,
            before: false,
          },
          if: {
            after: false,
            before: false,
          },
          for: {
            after: false,
            before: false,
          },
        },
      },
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
        allowTemplateLiterals: true,
        avoidEscape: true,
      }
    ],
    'require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        }
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