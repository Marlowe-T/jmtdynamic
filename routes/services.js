const express = require("express"),
      router  = express.Router();


router.get("/", (req,res) => {
  res.render("./services/services");
});

module.exports = router;