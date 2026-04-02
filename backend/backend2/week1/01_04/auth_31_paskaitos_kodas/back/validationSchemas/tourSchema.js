const zod = require("zod");

const TourSchema = zod.object({
  name: zod.coerce
    .string({
      error: (issue) => {
        return issue.input === NaN
          ? "Name is required"
          : "Name must be a string";
      },
    })
    .min(3, "Name must be at least 3 characters long"),

  duration: zod
    .number({
      error: (issue) => {
        console.log(issue.input);
        return issue.input === undefined
          ? "Name is required"
          : "Duration must be a number";
      },
    })
    .gte(3, "Duration must be at least 3 days"),

  difficulty: zod.enum(["easy", "medium", "difficult"], {
    error: "Difficulty must be easy, medium or difficult",
  }),

  // max_group_size: zod.number({
  //     required_error: "Max group size is required",
  // }),
  // difficulty: zod.enum(["easy", "medium", "difficult"], {
  //     required_error: "Difficulty is required",
  // }),
  // ratings_average: zod.number({
  //     required_error: "Ratings average is required",
  // }),
  // ratings_quantity: zod.number({
  //     required_error: "Ratings quantity is required",
  // }),
  // price: zod.number({
  //     required_error: "Price is required",
  // })
});

module.exports = TourSchema;
