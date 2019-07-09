const express = require("express"),
      router  = express.Router();

//##############
// Index Route
//##############

router.get("/", (req, res) => {
    res.render("./about/about");
});

module.exports = router;