const express = require("express"),
      router  = express.Router(),
      User = require("../models/user.js"),
      userApp = require("./models/userApp");

router.get("/", (req, res) => {
    res.render("./profile/userProfile");
});

router.post("/userapp", (req,res) => {
    const newApp = new UserApp(
        {
            name: req.body.name,
            address: req.body.address
        }
    );
    userApp.create(newApp, (err, createdApp) =>{
        if(err){
            req.flash("error", "App could not be created");
            req.redirect("back");
        } else {
            req.flash("success", "App created");
            res.redirect("back");
        }
    });
});


module.exports = router;