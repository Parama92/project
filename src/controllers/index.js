const express = require("express");
const router = express.Router();

router.use("/reviews", require("./reviews"));
router.use("/stack", require("./stack"));

module.exports = router;
