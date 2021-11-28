# eslint-plugin-no-type-assertion

Disallow type assertions in TypeScript code. The rule will forbid both `as` operator and the angle-bracketed syntax, unless used for [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions).

The following code becomes invalid:

```typescript
const foo: unknown = 42;

const bar = <number>foo;
const baz = foo as number;
```

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
