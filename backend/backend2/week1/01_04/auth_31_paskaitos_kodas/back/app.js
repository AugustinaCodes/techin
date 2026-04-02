const express = require("express");
const { sayHello, setDateToRequest } = require("./middlewares/app_middlewares");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");
const { ZodError } = require("zod");

const cookieParser = require('cookie-parser')

//create server
const app = express();

//body parsing middleware, req.body
app.use(express.json());

//middleware to parce cookies
app.use(cookieParser());

//aplication level middleware, working for any request
// app.use(sayHello);

app.use(setDateToRequest);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  // err.issues parses validation errors array from zod error
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "fail",
      message: "Validation failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
        code: issue.code,
      })),
    });
  }

  const statusCode = err.statusCode || 500;
  const errStatus = err.status || "error";
  const errMessage = err.message || "Internal Server Errror";

  res.status(statusCode).json({
    status: errStatus,
    message: errMessage,
  });
});

module.exports = app;
