# eslint-config-noxx

[![npm version](https://badge.fury.io/js/%40noxx%2Feslint-config.svg)](https://badge.fury.io/js/%40noxx%2Feslint-config)

My shareable eslint config

---

## Usage

```sh
npm i -D @noxx/eslint-config
// OR
yarn add -D @noxx/eslint-config
```


Inside of `.eslintrc.js` (at root of repo)

```js
module.exports = {
  extends: '@noxx',
};
```

Inside of the `scripts` node of `package.json`

```json
"scripts": {
  "test": "eslint ./**/*.js"
},
```

---

## Notes

If you have any dot folders or files that you want to be linted, create a
`.eslintignore` and add this:
```
!.FOLDER_NAME/
!.FILE_NAME
```

If you need support for dynamic imports `import('FILE')`, then you'll need to
install `babel-eslint` and add it to your `.eslintrc.js`, this will add support
for stage-3 features.
```js
module.exports = {
  ...
  parser: 'babel-eslint',
  ...
};
```