const express = require("express");
const { getResponseFormat } = require("../utils");
const router = express.Router();

router.use("/reviews", require("./reviews"));
router.use("/stack", require("./stack"));
router.get("/health", function (req, res) {
  return getResponseFormat(req, res, 200, {
    working: true,
  });
});

module.exports = router;
