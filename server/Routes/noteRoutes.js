const express = require("express");

const { getNoteById, getNotes, createNote } = require("../controller/noteController");
const { authMiddleware } = require("../middlewares");
const router = express.Router();

router.route("/").get(authMiddleware, getNotes);
router.route("/create").post(authMiddleware, createNote);
router.route(":id").get(getNoteById);

module.exports = router; 
