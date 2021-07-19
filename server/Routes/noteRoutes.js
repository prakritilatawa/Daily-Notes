const express = require("express");

const { getNotes } = require("../controller/noteController");
const router = express.Router();


router.route("/").get(getNotes);

module.exports = router;
