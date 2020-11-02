const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')

const { User }  = require('../../db/models')
const { requireUser, generateToken } = require('./utils')
// const { jwtConfig: {expiresIn } } = require('../../config');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() });
    }
    const user = await User.build(req.body);
    user.setPassword(req.body.password);

    const { token } = generateToken(user);
    user.tokenId = token;
    await user.save();
    res.cookie("token", token);
    res.json({ token, user: user.toSafeObject() });
}))

router.get('/', requireUser, asyncHandler( async function(req, res) {
    console.log(User)
    const users = await User.findAll();
    res.json({
        users
     });
}));

module.exports = router;
