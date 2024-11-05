const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Wellcome");
});

app.listen(4000, function (req, res) {
  console.log("port listing on 4000");
});
