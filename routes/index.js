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
    {   
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        company: req.body.company
    });
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Hello, " + user.firstName + "! Welcome to JMT Developing!")
            res.redirect("back");
        });
    });
});

router.post("/login", passport.authenticate("local",
    {   successRedirect: "back",
        successFlash: "Hello, welcome back!",
        failureRedirect: "back",
        failureFlash: "Invalid Username or Password."
    }), (req, res) => {
        console.log(passport.authenticate());
});

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "You've been logged out");
    res.redirect("/home");
})

module.exports = router;
