// GET /api/movies returns list of movies
// GET /api/movies/:id returns information of movie

const express = require('express');
const asyncHandler = require('express-async-handler');
const { Movie, Genre, MovieGenre } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const movies = await Movie.findAll({
        attributes: ['id', 'name', 'poster', 'imdbRating']
    });
    res.json(movies)
}))

router.get('/:id', asyncHandler(async function (req, res) {
    const movie = await Movie.findByPk(req.params.id);
    res.json(movie)
}))
module.exports = router;
