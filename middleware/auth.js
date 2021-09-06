const jwt = require("jsonwebtoken");
const Customer = require("../models/customer");
const router = require("../routes/dummyRoutes");

function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token)
      return res.status(401).json({
        errorMessage: "Unauthorized",
      });

    //decoded payload here
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(verified);

    req.user = verified.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      errorMessage: "Unauthorized",
    });
  }
}

module.exports = auth;
