const express = require("express"),
      router  = express.Router();


router.get("/", (req,res) => {
    res.render("./contact/contact");
  });

router.get("/success", (req,res) => {
    res.render("./contact/success");
  });

  module.exports = router;