require('dotenv').config()
const URI =process.env.MONGODB_ATLAS_URI
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const basicRoute = require("./Route/basic");
const userRoute = require("./Route/user");
const PORT = process.env.PORT || 8081;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
const session = require("express-session");
const MongodbSession = require("connect-mongodb-session")(session);
const store = new MongodbSession({
  uri: URI,
  collection: "sessions"
});
app.use(
  session({
    secret: "itsallaboutmysecret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

//templating engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("./public"));

/// /user/signup
app.use("/user", userRoute);

//Routing
app.use(basicRoute);

mongoose
  .connect(URI)
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
