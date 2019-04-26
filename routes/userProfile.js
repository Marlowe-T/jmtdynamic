const express = require("express"),
      router  = express.Router(),
      User = require("../models/user.js")

router.get("/", (req, res) => {
    res.render("./profile/userProfile");
});


module.exports = router;