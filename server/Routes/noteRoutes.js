const express = require("express");

const { getNotes } = require("../controller/noteController");
const { authMiddleware } = require("../middlewares");
const router = express.Router();

router.route("/").get(authMiddleware, getNotes);

module.exports = router; 
