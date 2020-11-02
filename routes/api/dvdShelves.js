const express = require('express');
const asyncHandler = require('express-async-handler');
const { DVDShelf, User } = require('../../db/models');

const router = express.Router();

router.get('/:userId', asyncHandler(async function(req, res) {
    console.log("here")
    const shelves = await DVDShelf.findAll({
    });
    console.log("now")
    res.json(shelves)
}))

router.post('/:userId', asyncHandler(async function(req, res) {
    const shelf = await DVDShelf.build(req.body);
    await shelf.save()

    console.log(shelf)
}))

module.exports = router;



// GET /api/dvd-shelves/:userId => returns a list of shelves for that user
// POST /api/dvd-shelves/:userId => adds a new shelve to the list for that user
// DELETE /apa/dvd-shelves/:userId/ => deletes a shelft from the list
// GET /api/dvd-shelves/:id => returns the info and all of the movies for said shelf
// POST /api/dvd-shelves/:id => adds a new movie to the shelf
// DELETE /api/dvd-shelves/:id => deletes a movie from the shelf
