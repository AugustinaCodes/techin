const {
  fetchAllDishes,
  postNewDish,
  patchDish,
} = require("../models/dishModel");
const AppError = require("../utils/appError");

exports.getAllDishes = async (req, res, next) => {
  try {
    const { page, limit } = req.query;

    if (page < 1 || limit < 1) {
      throw new AppError("Invalid page or limit", 400);
    }
    const offset = (+page - 1) * +limit;

    const dishes = await fetchAllDishes(offset, limit);

    if (dishes.length === 0) {
      res.status(404).json({
        status: "fail",
        message: "No dishes found",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      resultsCount: dishes.length,
      data: dishes,
    });
  } catch (error) {
    next(error);
  }
};

exports.createDish = async (req, res) => {
  try {
    const newDish = req.body;
    const postedDish = await postNewDish(newDish);

    res.status(201).json({
      status: "success",
      data: postedDish,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      message: "Error wrtiing file:" + error.message,
    });
  }
};

//4. update tour
exports.updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const newDishData = req.body;

    const updatedDish = await patchDish(id, newTourData);

    if (!updatedDish) {
      res.status(404).json({
        status: "error",
        message: "Invalid ID",
      });
      return;
    }

    res.status(201).json({
      status: "success",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error writing to file" + error.message,
    });
  }
};
