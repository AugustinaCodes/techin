const express = require("express");
// const { deleteMiddleware } = require("../middlewares/route_middleware");

const { validateBody } = require("../middlewares/validation_middlewares");
const TourSchema = require("../validationSchemas/tourSchema");

const { protect, allowAccessTo } = require("../controllers/authController");

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  // deleteTour,
} = require("../controllers/tourController");

const tourRouter = express.Router();

tourRouter
  .route("/")
  .get(protect, allowAccessTo("admin", "editor"), getAllTours)
  .post(validateBody(TourSchema), createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour);
// .delete(deleteMiddleware,deleteTour);

module.exports = tourRouter;
