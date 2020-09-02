var express = require("express");
var app = express();
var scrDate = [];
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var fs = require("file-system");
app.use(cookieParser());
const players = require("./users.json");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

app.use(bodyParser.urlencoded({ extended: true }));
 if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
var array2 = localStorage.getItem("users");

function drawTable(data) {
  var $ = jQuery = require("jquery")(window);
  console.log(data);

  for (var i = 0; i < data.length; i++) 
    $(".board").append(`<tr id = ${i}><td>${data[i].username}</td><td>${data[i].diff}</td><td>${data[i].tries}</td></tr>`);
  
};


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/scores", function (req, res) {
  res.sendFile(__dirname + "/scores.html");
  drawTable(players);
});

app.post("/index2", function (req, res) {
  var array = req.body;
  console.log('here is the array',array.array);
  // array = JSON.parse(array).array;
  fs.writeFile("./users.json", array.array, function(err){});
  
  localStorage.setItem("users", array);
  localStorage.setItem("scr", true);
});

app.use(express.static(path.join(__dirname, "/")));

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
