const express = require("express"),
      router  = express.Router(),
      User = require("../models/user"),
      userApp = require("../models/userApp");

//##############
// Index Route
//##############

router.get("/", (req, res) => {
    userApp.find({}, (err, userApps) => {
        if(err) {
            console.log(err);
        } else {
            res.render("./profile/userProfile", {userApp: userApps});
        }
    });
});

//##############
// Create Route
//##############

router.post("/newapp", (req,res) => {
    var name = req.body.name,
        image =  req.body.image,
        address = req.body.address,
        author = {
            id: req.user.id,
            username: req.user.username
        }
        newApp = {name: name, image: image, address: address, author: author};
    userApp.create(newApp, (err, newlyCreated) => {
        if(err){
            req.flash("error", "App could not be created... Try again.");
            res.redirect("back");
        } else {
            req.flash("success", newlyCreated.name + " Successfully added!");
            res.redirect("back");
        }
    });
});

//##############
// Show Route
//##############

router.get("/userApp/:userApp_id", (req, res) => {
    userApp.findById(req.params.userApp_id, (err, foundApp) => {
        if(err){
            req.flash("error", "Application could not be found");
            res.redirect("back");
        } else {
            res.render("profile/userAppInfo", {userApp_id: req.params.id, userApp: foundApp});
        }
    });
});

//##############
// Destroy Route
//##############

router.delete("/deleteApp/:userApp_id", (req,res) => {
    userApp.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            req.flash("error", "App failed to delete");
            res.redirect("back");
        } else {
            req.flash("error", "App Deleted");
            res.redirect("back");
        }
    });
});

module.exports = router;