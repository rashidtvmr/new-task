const faker = require("faker");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  uname: String,
  avatar: String
});
module.exports = mongoose.model("users", schema);
