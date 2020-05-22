# eslint-plugin-no-type-assertion

Disallow type assertions in TypeScript code. The rule will forbid `as` operator when used for changing the expression type, unless it's used for [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

## Installation

Ensure you have [ESLint](http://eslint.org) and `@typescript-eslint/parser` installed:

```
$ yarn add eslint @typescript-eslint/parser -D
```

Next, install this plugin:

```
$ yarn add eslint-plugin-no-type-assertion -D
```

## Configuration

In your ESLint configuratio, ensure you're using `@typescript-eslint/parser` as a parser and it's set up correctly:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018
  }
}
```

Add `eslint-plugin-no-type-assertion` to the plugin list:

```json
{
  "plugins": ["no-type-assertion"]
}
```

Enable the rule:

```json
{
  "rules": {
    "no-type-assertion/no-type-assertion": "error"
  }
}
```
