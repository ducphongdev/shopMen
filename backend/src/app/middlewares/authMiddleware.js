const jwt = require("jsonwebtoken");
const { env } = require("../../configs/environment");
const { totp } = require("otplib");

const middlewareController = {
  verifyToken: (req, res, next) => {
    let accessToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      accessToken = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.accessToken) {
      accessToken = req.cookies.accessToken;
    }
    if (accessToken) {
      jwt.verify(accessToken, env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({
              message: "The token has expired",
            });
          } else {
            return res.status(401).json({
              message: "The token is invalid",
            });
          }
        }

        req.user = user;
        next();
      });
    } else {
      return res.status(404).json("You're not authenticated");
    }
  },
  // Middleware delete user
  authUserMiddleware: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(404).json({
          message: "You're not allowed to delete other",
        });
      }
    });
  },
  //Phân quyền
  authAdminMiddleWare: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that!");
      }
    });
  },
  verifyEmail: (req, res, next) => {
    const { code } = req.body;
    const isValid = totp.check(code, env.VERIFY_EMAIL_SECRET);

    if (isValid) {
      next();
    } else {
      return res.status(422).json({
        field: "otp",
        message: "OTP không tồn tại",
      });
    }
  },
};

module.exports = middlewareController;
