const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/note')

router.get('/show', notesController.show)
router.post('/addnote', notesController.create)

module.exports = router;