const URI =
  "mongodb+srv://rashidtvmr:Mass94877348@mycluster-ztbvh.mongodb.net/newtask";
const localURI = "mongodb://localhost:27017/newtask";
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const basicRoute = require("./Route/basic");
const userRoute = require("./Route/user");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
const session = require("express-session");
const MongodbSession = require("connect-mongodb-session")(session);
const store = new MongodbSession({
  uri: localURI,
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
  .connect(localURI)
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
