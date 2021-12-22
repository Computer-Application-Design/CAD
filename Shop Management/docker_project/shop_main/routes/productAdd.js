const express = require('express');
const Product = require('../schemas/product');


const router = express.Router();

router.route('/')
 .get(async (req, res, next) => {
    try {
      res.render('productAdd');
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const product = await Product.create({
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