const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-type-assertion");

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2018,
  },
});

const testsFor = (name, ...args) => ruleTester.run(name, rule, ...args);

const errors = [{ messageId: "typeAssertion" }];

describe("no-type-assertion", () => {
  testsFor("type assertions", {
    valid: [{ code: "const foo = 42 as const" }],
    invalid: [
      { code: "const foo = 42 as number", errors },
      { code: "const foo = 42 as any", errors },
    ],
  });
});
