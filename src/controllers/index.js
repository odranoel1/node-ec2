const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

// Modules
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');

router.get('/', (req, res) => {
  res.json({
    app: "Hello perra"
  });
});

router.post('/signup', async (req, res, next) => {
  let { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password
  });

  user.password = await user.encryptPassword(user.password);
  await user.save();

  //Register token using user id
  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24 //24hours
  });

  res.json({
    auth: true,
    token
  });

});

router.get('/me', verifyToken, async (req, res, next) => {

  const user = await User.findById(req.userId, { password: 0 }); //No return password or any value

  if (!user) {
    return res.status(404).send('No user found');
  }

  res.json(user);
});

router.post('/signin', async (req, res, next) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).send('Email doesnt exist');

  const validPassword = await user.validatePassword(password);

  //Send token to user for navigate in app  
  if (!validPassword) {
    return res.status(401).json({ auth: false, token: null });
  }

  let token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24
  });

  res.json({
    auth: true,
    token
  });

});

module.exports = router;