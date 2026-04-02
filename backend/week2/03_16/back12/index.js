const express = require("express");
const fs = require("fs");
const path = require("path");

//create server
const app = express();
const port = 3000;
const dir = path.join(__dirname, "data/tours-simple.json");

//body parsing middleware, req.body
app.use(express.json());

const tours = JSON.parse(fs.readFileSync(dir));

//get all tours Read
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: tours,
  });
});

//get tour by ID Read
app.get("/api/v1/tours/:id", (req, res) => {
  //request params
  const { id } = req.params;
  //   console.log(req.params);

  const tour = tours.find((tour) => {
    return `${tour.id}` === id;
  });
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
});

//get tours by duration>entered and difficulty - UŽDUOTIS JUMS :D

//post new tour Create
app.post("/api/v1/tours", (req, res) => {
  const {
    name,
    duration,
    maxGroupSize,
    difficulty,
    ratingsAverage,
    ratingsQuantity,
    price,
  } = req.body;

  const newID = tours[tours.length - 1].id + 1;
  const newTour = {
    id: newID,
    name,
    duration,
    maxGroupSize,
    difficulty,
    ratingsAverage,
    ratingsQuantity,
    price,
  };

  tours.push(newTour);

  try {
    fs.writeFileSync(dir, JSON.stringify(tours));
    res.status(201).json({
      status: "success",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      message: `Error writing file ${error.message}`,
    });
  }
});

// update tour, patch, Update
// look up patch vs put

app.patch("/api/v1/tours/:id", (req, res) => {
  const { id } = req.params;

  // saugumas duomenu
  const newTourData = req.body;

  const tour = tours.find((tour) => {
    return (tour.id = id);
  });

  if (!tour) {
    res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
    return;
  }

  const toursFiltered = tours.filter((tour) => tour.id !== id);
  const newTour = { ...tour, ...newTourData };

  toursFiltered.push(newTour);

  try {
    fs.writeFileSync(dir, JSON.stringify(toursFiltered));
    res.status(201).json({
      status: "success",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `Error wiritng to file ${error.message}`,
    });
  }
});

// delete

app.delete("/api/v1/tours/:id", (req, res) => {
  const { id } = req.params;

  const tour = tours.find((tour) => {
    return (tour.id = id);
  });

  if (!tour) {
    res.status(404).json({
      status: "error",
      message: "Invalid ID",
    });
    return;
  }

  const toursFiltered = tours.filter((tour) => tour.id !== id);

  try {
    fs.writeFileSync(dir, JSON.stringify(toursFiltered));
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: `Error deleting file ${error.message}`,
    });
  }
});

app.listen(port, () => {
  console.log("Server is ready and listening port 3000");
});

// http://localhost:3000/api/v1/tours   GET
