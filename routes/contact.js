const express = require("express"),
      router  = express.Router();


router.get("/", (req,res) => {
    res.render("./contact/contact");
  });

  module.exports = router;