const express = require("express"),
      router  = express.Router();


router.get("/catiaDroneProject", (req,res) => {
  res.render("./workdetails/catiaDroneProject");
});

module.exports = router;