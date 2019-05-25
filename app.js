const express = require("express");
const app = express();
const basicRoute = require("./Route/basic");
const PORT = process.env.PORT || 8080;

//templating engine
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(basicRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
