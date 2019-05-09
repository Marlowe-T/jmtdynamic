const express = require("express"),
      router  = express.Router(),
      User = require("../models/user"),
      userApp = require("../models/userApp");

router.get("/", (req, res) => {
    userApp.find({}, (err, userApps) => {
        if(err) {
            console.log(err);
        } else {
            res.render("./profile/userProfile", {userApp: userApps});
        }
    });
});

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
module.exports = router;