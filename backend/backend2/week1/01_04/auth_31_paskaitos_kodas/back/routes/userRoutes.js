const express = require("express");
const { signup, login, protect, logout } = require("../controllers/authController");
const { validateBody } = require("../middlewares/validation_middlewares");
const UserSchema = require("../validationSchemas/userScheme");

const userRouter = express.Router();

userRouter.route("/signup").post(validateBody(UserSchema), signup);
userRouter.route("/login").post(login);
userRouter.route("/logout").get(protect, logout);

module.exports = userRouter;
