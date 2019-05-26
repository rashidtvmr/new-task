const { validationResult } = require("express-validator/check");
const Post = require("../model/post");
const User = require("../model/user");
const mongoose = require("mongoose");
const faker = require("faker");
let chart = require("../model/chart");
module.exports.postSignup = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).render("index", {
      pageTitle: "Validation Error",
      error: error.array()[0].msg,
      isLoggedin: false
    });
  }
  const uname = req.body.uname;
  let userResult;
  const user = new User({
    uname: uname,
    avatar: faker.image.avatar()
  });
  const result = await user.save();
  if (result) {
    console.log(result);
    req.session.user = result;
    req.session.isLoggedin = true;
  }
  console.log("req.sesion", req.session);
  res.render("sample/sample1", {
    pageTitle: "Sample1",
    error: false,
    isLoggedin: req.session.isLoggedin
  });
};
module.exports.getLogout = (req, res, next) => {
  req.session.destroy();
  res.status(200).redirect("/");
};
module.exports.uploadPost = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(422).render("sample/sample1", {
      pageTitle: "Invalid Post",
      error: error.array()[0].msg,
      isLoggedin: req.session.isLoggedin
    });
  }

  const imgUrl = req.body.img;
  const body = req.body.postBody;

  const post = Post({
    postedby: req.session.user._id,
    content: body,
    imgUrl: imgUrl
  });
  return post
    .save()
    .then(result => {
      if (result) {
        return res.status(200).redirect("/sample2");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
