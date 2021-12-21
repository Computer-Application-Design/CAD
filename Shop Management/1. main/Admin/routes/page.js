const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile', { title: 'CAD-SHOP' });
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'CAD-SHOP',
    twits,
  });
});

module.exports = router;