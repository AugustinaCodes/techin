exports.validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body); //req.params arba req.query
    if (!result.success) {
      return next(result.error);
    }
    // parsed / sanitized data
    req.validatedBody = result.data;
    next();
  };
};


//galima rašyti tokias pat middlewares req.query arba request.params