const express = require("express");
const dishRouter = require("./routes/dishesRoutes")
const userRouter = require("./routes/userRoutes");
const { ZodError } = require("zod");

const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/dishes", dishRouter);
app.use("/auth", userRouter);

app.use((err, req, res, next) => {
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
