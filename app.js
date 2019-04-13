const express = require("express"),
      app     = express(),
      path    = require("path"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

const contactRoutes = require("./routes/contact"),
      indexRoutes   = require("./routes/index"),
      projectRoutes = require("./routes/project");

var port = process.env.PORT || 8080

//mongoose.connect("mongodb://localhost:27017/portsite", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.use("/", indexRoutes);
app.use("/contact", contactRoutes);
app.use("/projects", projectRoutes);


app.listen(port, function (){
  console.log("---Server Started---");
  console.log("---localhost:" + port + "---");
});