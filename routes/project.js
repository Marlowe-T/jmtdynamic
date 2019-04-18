const express = require("express"),
      router  = express.Router();


router.get("/", (req,res) => {
  res.render("./projects/projects");
});

router.post("/", (req,res) => {
  var name = req.body.name,
      image = req.body.image,
      desc = req.body.description,
      newProject = {name: name, image: image, description: desc};
  Project.create(newProject, (err, newlyCreated) => {
    if(err){
      req.flash("error", "Project could not be created");
      res.redirect("/projects");
    } else {
      req.flash("success", "Project Created");
      res.redirect("/projects");
    }
  });
});

  module.exports = router;