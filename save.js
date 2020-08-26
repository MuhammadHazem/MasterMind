var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/scores.html");
});

app.use(express.static(path.join(__dirname, "/")));

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
