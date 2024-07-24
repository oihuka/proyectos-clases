const express = require("express");

const app = express();

const PORT = 3000;

const pong = (req, res, next) => {
  //! req - request
  //! res - response
  //! next - next middleware of a path
  return res.status(200).json("pong");
}

app.use("/ping", pong);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);

});