const express = require("express"),
      router  = express.Router();


router.get("/catiaDroneProject", (req,res) => {
  res.render("./workdetails/catiaDroneProject");
});

router.get("/autocrossProject", (req,res) => {
  res.render("./workdetails/autocrossProject");
})

module.exports = router;