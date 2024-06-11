const express = require("express");
const { writeReview } = require("../helpers/reviews");
const { getResponseFormat } = require("../utils");
const router = express.Router();

router.post("/add", function (req, res) {
  const { content } = req.body || {};
  return writeReview(content)
    .then((result) => {
      return getResponseFormat(req, res, 200, {
        ...result,
      });
    })
    .catch((e) => {
      console.log("error in fetching is" + e);
      return getResponseFormat(req, res, 403, e);
    });
});

module.exports = router;
