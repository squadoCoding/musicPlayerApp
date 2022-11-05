const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(require("./routs"));

app.listen(8000, () => {
  console.log("App successfully started");
});