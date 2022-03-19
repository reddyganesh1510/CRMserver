const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello world");
});
router.use("/users", require("./user"));
router.use("/company", require("./companyCrud"));

module.exports = router;
