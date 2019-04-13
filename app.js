const express = require("express"),
      app     = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

const contactRoutes = require("./routes/contact"),
      indexRoutes   = require("./routes/index"),
      projectRoutes = require("./routes/project");

//mongoose.connect("mongodb://localhost:27017/portsite", {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


app.use("/", indexRoutes);
app.use("/contact", contactRoutes);
app.use("/projects", projectRoutes);


app.listen(process.env.PORT, function (){
  console.log("---Server Started---")
});