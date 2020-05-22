module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow type assertions in TypeScript code",
    },
    messages: {
      typeAssertion: "Do not use as operator to assert expression type",
    },
    schema: [],
  },

  create: function (context) {
    return {
      TSAsExpression(node) {
        const { typeAnnotation } = node;
        if (typeAnnotation.type === "TSTypeReference") {
          const { typeName } = typeAnnotation;
          if (typeName.type === "Identifier" && typeName.name === "const") {
            return;
          }
        }

        context.report({ node, messageId: "typeAssertion" });
      },
    };
  },
};
