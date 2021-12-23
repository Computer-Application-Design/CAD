// 2017152010 made by 김태용
const express = require('express');
//const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
//const { Post, User, Hashtag } = require('../models');
const Product = require('../schemas/product')
const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
  next();
});


router.get('/', async (req, res, next) => { // localhost/포트 위치일 때
  try {
    //const products = await Product.find({}); // User.find() 메서드로 모든 사용자를 찾은 뒤 mongoose.html을 렌더링할 때 users 변수로 넣는다.
    //console.log(products);
    res.render('main');
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;