const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../../app/controllers/v1/AuthController");
const middlewareController = require("../../app/middlewares/authMiddleware");
require("dotenv").config();

router
  .route("/register")
  .post(middlewareController.verifyEmail, authController.register);

router.route("/login").post(authController.login);

router.route("/refresh").post(authController.requestRefreshToken);

router.route("/logout").post(authController.logOut);

router.route("/forgot-password").post(authController.forgotPassword);

router.route("/reset-password").post(authController.resetPassword);

router
  .route("/send-verification-email")
  .post(authController.sendVerificationEmail);

// LOGIN GOOGLE
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.route("/google/redirect").get(
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/404",
  }),
  authController.googleRedirect
);

module.exports = router;
