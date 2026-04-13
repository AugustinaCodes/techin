const zod = require("zod");

const DishSchema = zod.object({
  name: zod.coerce
    .string({
      error: (issue) => {
        return issue.input === NaN
          ? "Name is required"
          : "Name must be a string";
      },
    })
    .min(2, "Name must be at least 2 characters long"),

  price: zod.number({
    error: (issue) => {
      console.log(issue.input);
      return issue.input === undefined
        ? "Price is required"
        : "Price must be a number";
    },
  }),
});

module.exports = DishSchema;
