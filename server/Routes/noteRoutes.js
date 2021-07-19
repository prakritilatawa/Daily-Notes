const express = require("express");

const { getNotes } = require("../controller/noteController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();


router.route("/").get(protect, getNotes);

module.exports = router;
