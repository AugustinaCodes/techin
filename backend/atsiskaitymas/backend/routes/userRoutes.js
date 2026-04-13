const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateBody } = require("../middlewares/validation_midlewares")
const UserSchema = require("../validationSchemas/userSchema")

const userRouter = express.Router();

userRouter.route("/register").post(validateBody(UserSchema),register);
userRouter.route("/login").post(login);

module.exports = userRouter;
