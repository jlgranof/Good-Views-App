const express = require('express');
const asyncHandler = require('express-async-handler');
const { Review, User } = require('../../db/models');

const router = express.Router();

router.get('/:id', asyncHandler(async function(req, res) {
    const reviews = await Review.findAll({
        where: {
            movieId: `${req.params.id}`
        },
        include: [{
        model: User
        }]
    })
    res.json(reviews)
}))

router.post('/:id', asyncHandler(async function(req, res) {
    // console.log(req.body)
    const review = await Review.create(req.body);
    res.json(review)
}))

module.exports = router;
