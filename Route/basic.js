const express = require("express");
const router = express.Router();
const controller = require("../controller/sample");

router.get("/", controller.getIndex);
router.get("/sample1", controller.getSample1);
router.get("/sample2", controller.getSample2);
module.exports = router;
