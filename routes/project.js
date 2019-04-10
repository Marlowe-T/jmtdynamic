const express = require("express"),
      router  = express.Router();


router.get("/", (req,res) => {
    res.render("./projects/projects");
  });

  module.exports = router;