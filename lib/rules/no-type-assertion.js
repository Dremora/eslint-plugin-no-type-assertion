module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow type assertions in TypeScript code",
    },
    messages: {
      angleBracketAssertion: "Do not use type assertion",
      asAssertion: "Do not use as operator for type assertion",
    },
    schema: [],
  },

  create: function (context) {
    return {
      TSTypeAssertion(node) {
        const { typeAnnotation } = node;
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
        if (typeAnnotation.type === "TSTypeReference") {
          const { typeName } = typeAnnotation;
          if (typeName.type === "Identifier" && typeName.name === "const") {
            return;
          }
        }

        context.report({ node, messageId: "asAssertion" });
      },
    };
  },
};
