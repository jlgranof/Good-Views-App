const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { User } = require('../../db/models');
const { requireUser, generateToken, restoreUser } = require('./utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.get('/', restoreUser, asyncHandler(async function(req, res) {
  return res.json({
    user: req.user || {}
  });
}))

router.put('/', [email, password], asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email }
    });
  if (!user || !user.isValidPassword(password)) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['Invalid credentials'];
    return next(err);
  }
  const token = generateToken(user);
  console.log(token)
  user.tokedId = token;
  await user.save();
  res.cookie('token', token);
  res.json({ token, user: user.toSafeObject() });
}));

router.delete('/', asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'success' });
  console.log('4')
}));

module.exports = router;
