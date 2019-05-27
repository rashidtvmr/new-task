const Post = require("../model/post");
const User = require("../model/user");
const mongoose = require("mongoose");
const faker = require("faker");
let chart = require("../model/chart");
module.exports.postRandombyme = (req, res, next) => {
  const post = Post({
    postedby: req.session.user._id,
    content: faker.lorem.sentence(),
    imgUrl: faker.image.image()
  });
  return post
    .save()
    .then(result => {
      if (result) {
        return res.status(200).redirect("/sample1");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports.postRandomCmntbyme = async (req, res, next) => {
  let randomPosts;
  randomPosts = await Post.find({}, "_id");
  let randomPost = faker.random.arrayElement(randomPosts)._id;
  console.log(randomPost, randomPosts);
  Post.findByIdAndUpdate(randomPost, {
    $push: {
      comments: {
        _id: req.session.user._id,
        commentBody: faker.lorem.words()
      }
    }
  })
    .then(result => {
      if (result) {
        return res.status(200).redirect("/sample1");
      }
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports.postRandom = async (req, res, next) => {
  const user = new User({
    uname: faker.internet.userName(),
    avatar: faker.image.avatar()
  });
  const result = await user.save();
  if (result) {
    const post = Post({
      postedby: result._id,
      content: faker.lorem.sentence(),
      imgUrl: faker.image.image()
    });
    return post
      .save()
      .then(result => {
        if (result) {
          return res.status(200).redirect("/sample1");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
module.exports.postRandomCmnt = async (req, res, next) => {
  let randomPosts;
  randomPosts = await Post.find({}, "_id");
  let randomPost = faker.random.arrayElement(randomPosts)._id;
  console.log(randomPost, randomPosts);
  const user = new User({
    uname: faker.internet.userName(),
    avatar: faker.image.avatar()
  });
  const result = await user.save();
  if (result) {
    Post.findByIdAndUpdate(randomPost, {
      $push: {
        comments: {
          _id: result._id,
          commentBody: faker.lorem.words()
        }
      }
    })
      .then(result => {
        if (result) {
          return res.status(200).redirect("/sample1");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
