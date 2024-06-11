const { checkIsProduction } = require("./config");

function getResponseFormat(req, res, code, data) {
  res.statusCode = code;

  if (code >= 500 && checkIsProduction()) {
    // Send error to sentry

    // send error to APM -> new relic can be used below
    //   newrelic.noticeError(data, {
    //     stack: new Error()?.stack?.split("\n"),
    //     reqBody: JSON.stringify(req.body),
    //   });

    return res.json(data?.message ?? data);
  }

  return res.json(data);
}

async function delayInMillis(milliSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliSeconds);
  });
}

module.exports = {
  getResponseFormat,
  delayInMillis,
};
