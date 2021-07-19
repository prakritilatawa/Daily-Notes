const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(async (req,res) => {
    const notes = await Note.find()
    res.json(notes);
});

module.exports = { getNotes };