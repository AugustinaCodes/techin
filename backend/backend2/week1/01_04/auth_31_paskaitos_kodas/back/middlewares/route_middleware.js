//route level middlewares

//delete
exports.deleteMiddleware = (req, res, next) => {
  console.log("Hello from middleware for delete route");
  next();
};
