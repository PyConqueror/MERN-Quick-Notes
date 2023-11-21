const Note = require("../models/note");

module.exports = {
    create,
    show
}

async function create(req, res) {
    const note = await Note.create({
        text: req.body.text,
        user: req.body.user
    })
    await note.save();
    console.log(note)
}

async function show(req, res) {
    const notes = Note.find({})
    res.json(notes)
}