const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-type-assertion");

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2018,
  },
});

const testsFor = (name, ...args) => ruleTester.run(name, rule, ...args);

const asErrors = [{ messageId: "asAssertion" }];
const angleBracketErrors = [{ messageId: "angleBracketAssertion" }];

testsFor("no-type-assertion", {
  valid: [
    { code: "const foo = <const>42" },
    { code: "const foo = 42 as const" },
  ],
  invalid: [
    { code: "const foo = <number>42", errors: angleBracketErrors },
    { code: "const foo = 42 as number", errors: asErrors },
    { code: "const foo = 42 as any", errors: asErrors },
  ],
});
