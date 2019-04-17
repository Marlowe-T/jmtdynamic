const express = require("express"),
      router  = express.Router(),
      passport = require("passport"),
      User    = require("../models/user");


router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    res.render("./index/index");
});

router.post("/register", (req, res) => {
    var newUser = new User({
        name: req.body.name,
        company: req.body.company,
        email: req.body.email});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            res.redirect("/");
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect("/");
        });
    });
});

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/projects",
        failureRedirect: "/contact"
    }), (req, res) => {
        console.log(passport.authenticate());
});

module.exports = router;
