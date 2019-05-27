const express = require("express");
const router = express.Router();
const { body } = require("express-validator/check");
const userController = require("../controller/user");
////user/signup
router.post(
  "/signup",
  body("uname")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Username should not be empty")
    .isAlphanumeric()
    .isLength({ min: 6, max: 16 })
    .withMessage("Username is too short or too long"),
  userController.postSignup
);

//user/post
router.post(
  "/post",
  [
    body("img")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Image url shouldnot be empty")
      .isURL()
      .withMessage("Image url is invalid"),
    body("postBody")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Post shouldnot be empty")
  ],
  userController.uploadPost
);
///user/postcmnt/<%=post._id%>
router.post("/postcmnt/:postId", userController.postComment);
router.get("/logout", userController.getLogout);
///user/postrandom
router.post("/postrandom", userController.postRandom);
module.exports = router;
