require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // that will for all like  https / http
  })
);

app.use(require("./controllers"));

init();

async function init() {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Express App Listening on Port: ${port}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
