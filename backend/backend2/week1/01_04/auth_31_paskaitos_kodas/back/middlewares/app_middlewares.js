//app level

exports.sayHello=(_, __, next) => {
  console.log("Hello from the middleware for any route");

  // jei nebus next(), reguest nebus perduodamas toliau ir neprieis prie response išsiuntimo
  next();
}

exports.setDateToRequest= (req, __, next) => {
  const date = new Date().toISOString();
  req.requestTime = date;
  next();
}