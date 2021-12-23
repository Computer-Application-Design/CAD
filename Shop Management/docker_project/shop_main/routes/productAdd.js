// 2017152010 made by 김태용
const express = require('express');
const Product = require('../schemas/product');


const router = express.Router();

router.route('/') // localhost/productAdd 접근 시
 .get(async (req, res, next) => {
    try {
      res.render('productAdd'); // productAdd.html을 response
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const product = await Product.create({ // 상품 추가
        name: req.body.name,
        price: req.body.price,
        inventory: req.body.inventory,
        source: req.body.source,
      });
      console.log(product);
      res.status(201).json(product);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;