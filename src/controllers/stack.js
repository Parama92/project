const express = require("express");
const { getResponseFormat } = require("../utils");
const { dumpCompaniesUsingSlack } = require("../helpers/stacks");
const router = express.Router();

router.post("/", function (req, res) {
  return dumpCompaniesUsingSlack("NTM2NA")
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
