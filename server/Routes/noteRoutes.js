const express = require("express");

const { getNoteById, getNotes, createNote, UpdateNote, DeleteNote } = require("../controller/noteController");
const { authMiddleware } = require("../middlewares");
const router = express.Router();

router.route("/").get(authMiddleware, getNotes);
router.route("/create").post(authMiddleware, createNote);
router.route(":id").get(getNoteById);
router.route("/:id").get(getNoteById).put(authMiddleware, UpdateNote).delete(authMiddleware, DeleteNote);

module.exports = router; 
