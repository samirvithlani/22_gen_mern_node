const productMiddleware = (req, res, next) => {
  var data = "abcd";
  if (data === "abc") {
    next();
  } else {
    res.status(500).json({
      message: "Error",
    });
  }
};
module.exports = {
  productMiddleware,
};
