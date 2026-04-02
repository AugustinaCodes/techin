const {
  fetchAllTours,
  fetchTourByID,
  postNewTour,
  patchTour,
  filterTours,
} = require("../models/tourModel");
const AppError = require("../utils/appError");

//1.
//filter example
exports.getAllTours = async (req, res, next) => {
  try {
    // { page: '3', limit: '5' }
    const { page, limit } = req.query;

    if (page < 1 || limit < 1) {
      throw new AppError("Invalid page or limit", 400);
    }

    //nepamiršti validacijos
    const offset = (+page - 1) * +limit;

    console.log(offset);

    const tours = await fetchAllTours(offset, limit);

    if (tours.length === 0) {
      res.status(404).json({
        status: "fail",
        message: "No tours found",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      resultsCount: tours.length,
      data: tours,
    });
  } catch (error) {
    next(error);

    // next(error);
  }
};

//2. get tour by ID Raed
exports.getTour = async (req, res) => {
  try {
    //request params
    const { id } = req.params;
    const tour = await fetchTourByID(id);

    //response error
    if (!tour) {
      res.status(404).json({
        status: "error",
        message: "Invalid ID",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// //3. create new tour
exports.createTour = async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.validatedBody);

    const newTour = req.body;
    const postedTour = await postNewTour(newTour);

    res.status(201).json({
      status: "success",
      data: postedTour,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      message: "Error wrtiing file:" + error.message,
    });
  }
};

//4. update tour
exports.updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const newTourData = req.body;

    const updatedTour = await patchTour(id, newTourData);

    if (!updatedTour) {
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

// //5. delete tour
// exports.deleteTour = (req, res) => {
//   //id paemimas
//   const { id } = req.params;

//   //suradimas pagal id
//   const tour = tours.find((tour) => {
//     return tour.id == id;
//   });

//   //klaida jei naranda tokio id
//   if (!tour) {
//     res.status(404).json({
//       status: "error",
//       message: "Invalid ID",
//     });
//     return;
//   }

//   //pasalinimas is masyvo sukuriant nauja masyva
//   const toursFiltered = tours.filter((tour) => tour.id != id);

//   try {
//     //naujo sukurto masyvo irasymas i faila/serveri
//     fs.writeFileSync(dir, JSON.stringify(toursFiltered));
//     res.status(204).json({
//       status: "success",
//       data: null,
//     });

//     //klaidos pagavimas jei kazkas nepavyko su serveriu(dingo rysys ir panasiai )
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "error delete file" + error.messsage,
//     });
//   }
// };
