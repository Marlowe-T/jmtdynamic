const express = require("express"),
      router  = express.Router();


router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("./index/index");
});

router.get("/login", (req, res) => {
    res.render("./index/login");
});

router.get("/register", (req, res) => {
    res.render("./index/register");
});

module.exports = router;
