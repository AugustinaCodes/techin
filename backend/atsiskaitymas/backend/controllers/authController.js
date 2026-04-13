const argon2 = require("argon2");
const { createUser, getUserByEmail } = require("../models/userModel");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

const sendTokenCookie = (token, res) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);
};

exports.register = async (req, res, next) => {
  try {
    const { password } = req.validatedBody;

    const passwordHash = await argon2.hash(password);

    const newUser = { ...req.validatedBody, password: passwordHash };

    const createdUser = await createUser(newUser);
    createdUser.password = undefined;
    createdUser.id = undefined;

    res.status(201).json({
      status: "success",
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) throw new AppError("Invalid email or password", 401);

    const passwordCorrect = await argon2.verify(user.password, password);
    if (!passwordCorrect) throw new AppError("Invalid email or password", 401);

    const token = signToken(user.id);
    sendTokenCookie(token, res);

    user.password = undefined;

    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token = req.cookies?.jwt;

    if (!token) throw new AppError("You are not logged in!", 401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await getUserByID(decoded.id);
    if (!currentUser)
      throw new AppError(
        "The user belonging ti this token does no longer exist",
        401,
      );

    req.user = currentUser;
    next();
  } catch (error) {
    next(error);
  }
};

exports.allowAccessTo = (...roles) => {
  return (req, res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        throw new AppError(
          "You don't have permissions to perform this action",
          403,
        );
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
