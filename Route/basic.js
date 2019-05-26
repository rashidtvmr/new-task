const express = require("express");
const router = express.Router();
const controller = require("../controller/sample");
const auth = require("../middleware/auth");
const un_auth = require("../middleware/un-auth");
router.get("/", un_auth, controller.getIndex);
router.get("/sample1", auth, controller.getSample1);
router.get("/sample2", auth, controller.getSample2);
module.exports = router;
