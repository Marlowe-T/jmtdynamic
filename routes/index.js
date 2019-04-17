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
    var newUser = new User(
    {   name: req.body.name,
        company: req.body.company,
        username: req.body.username
    });
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Hello, " + user.name + "! You are now logged in.")
            res.redirect("back");
        });
    });
});

router.post("/login", passport.authenticate("local",
    {   successRedirect: "back",
        failureRedirect: "back"
    }), (req, res) => {
        console.log(passport.authenticate());
});

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "You have been logged out.");
    res.redirect("back");
})

module.exports = router;
