const express = require("express");
const { validateBody } = require("../middlewares/validation_midlewares");

const { protect, allowAccessTo } = require("../controllers/authController");

const {
  getAllDishes,
  createDish,
  updateDish,
} = require("../controllers/dishController");
const DishSchema = require("../validationSchemas/dishSchema");

const dishRouter = express.Router();

dishRouter.route("/").get(protect, allowAccessTo("admin"), getAllDishes);
dishRouter.route("/").post(validateBody(DishSchema), createDish);
dishRouter.route("/:id").patch(updateDish);

module.exports = dishRouter;
