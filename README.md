# eslint-plugin-no-type-assertion

Disallow type assertions in TypeScript code. The rule will forbid both `as` operator and the angle-bracketed syntax, unless used for [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) or with the `unknown` type. The rule also forbids [non-null assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-).

The following code becomes invalid:

```typescript
const foo: unknown = 42;

const notAString = <string>foo; // can't perform angle-bracketed type assertion
const alsoNotAString = foo as string; // can't use `as` operator for type assertion

const objectWithOptionalProperty: { a?: number } = {};

const notANumber = objectWithOptionalProperty.a! / 2; // can't use non-null assertion operator
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

In your ESLint configuration, ensure you're using `@typescript-eslint/parser` as a parser and it's set up correctly:

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
