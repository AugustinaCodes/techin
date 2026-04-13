const zod = require("zod");

const CustomerSchema = zod.object({
  name: zod.coerce
    .string({
      error: (issue) => {
        return issue.input === NaN
          ? "Name is required"
          : "Name must be a string";
      },
    })
    .min(2, "Name must be at least 2 characters long"),

  email: zod.coerce.string({
    error: (issue) => {
      return issue.input === NaN
        ? "Email is required"
        : "Email must be a string";
    },
  }),
});

module.exports = CustomerSchema;
