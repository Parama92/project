const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { sequelize } = require("./model");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // that will for all like  https / http
  })
);
// app.set("sequelize", sequelize);
// app.set("models", sequelize.models);

app.use(require("./controllers"));

init();

async function init() {
  try {
    app.listen(3001, () => {
      console.log("Express App Listening on Port 3001");
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
