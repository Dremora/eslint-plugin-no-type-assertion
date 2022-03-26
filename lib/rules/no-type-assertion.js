module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow type assertions in TypeScript code",
    },
    messages: {
      angleBracketAssertion: "Do not use type assertion",
      asAssertion: "Do not use as operator for type assertion",
      nonNullAssertion: "Do not use non-null assertion operator",
    },
    schema: [],
  },

  create: function (context) {
    return {
      TSTypeAssertion(node) {
        const { typeAnnotation } = node;

        if (typeAnnotation.type === "TSUnknownKeyword") {
          return;
        }

        if (typeAnnotation.type === "TSTypeReference") {
          const { typeName } = typeAnnotation;
          if (typeName.type === "Identifier" && typeName.name === "const") {
            return;
          }
        }

        context.report({ node, messageId: "angleBracketAssertion" });
      },
      TSAsExpression(node) {
        const { typeAnnotation } = node;

        if (typeAnnotation.type === "TSUnknownKeyword") {
          return;
        }

        if (typeAnnotation.type === "TSTypeReference") {
          const { typeName } = typeAnnotation;
          if (typeName.type === "Identifier" && typeName.name === "const") {
            return;
          }
        }

        context.report({ node, messageId: "asAssertion" });
      },

      TSNonNullExpression(node) {
        context.report({ node, messageId: "nonNullAssertion" });
      },
    };
  },
};
