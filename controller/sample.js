let faker = require("faker");
let chart = require("../model/chart");
const Post = require("../model/post");

module.exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle: "Home",
    error: false,
    isLoggedin: req.session.isLoggedin
  });
};
module.exports.getSample1 = (req, res, next) => {
  Post.find({})
    .populate({
      path: "postedby",
      model: "users",
      select: "uname avatar"
    })
    .populate({
      path: "comments._id",
      model: "users",
      select: "uname avatar"
    })
    .exec()
    .then(result => {
      //console.log(result);
      return res.render("sample/sample1", {
        pageTitle: "Sample1",
        error: false,
        post: result,
        isLoggedin: req.session.isLoggedin,
        chartData: chart.arrayElement
      });
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports.getSample2 = (req, res, next) => {
  res.render("sample/sample2", {
    pageTitle: "Sample2",
    isLoggedin: req.session.isLoggedin,
    chartData: chart.arrayElement
  });
};
