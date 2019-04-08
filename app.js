const express = require("express"),
      app     = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost:27017/portsite", {useNewUrlParser: true});

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
    res.render("index/index");
});

app.get("/contact", (req,res) => {
  res.render("contact/contact");
});

var server = app.listen(3000, function (){
  console.log("---Server Started---")
});