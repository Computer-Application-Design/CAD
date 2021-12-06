const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const products = [];


const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("It is next middelvare!");
    res.sendFile(path.join( rootDir, 'views', 'add-product.html'));
});

// 2021.12.06 2017154003 고현석 (form data를 받아 shop.pug로 Post해주는 데이터 수정)
router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    image: req.body.image,
    price: req.body.price,
    description: req.body.dsc
  })
  res.redirect("/");
});


exports.routes = router;
exports.products = products;
