require("./models/db");
require("./db");

const express = require("express");
var bodyParser = require("body-parser");
const boardControllers = require("./controllers/boards");
const router = require("./routes/board");

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(router);
app.use(boardControllers);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Port Running on 3000");
});
