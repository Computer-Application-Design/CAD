const express = require('express');
const Product = require('../schemas/product');


const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const products = await Product.find({}); // User.find() 메서드로 모든 사용자를 찾은 뒤 mongoose.html을 렌더링할 때 users 변수로 넣는다.
      //const pro = await Product.deleteOne({name: 'MacBook'}); //삭제하는 방법
      //const pro1 = await Product.deleteOne({name: 'ㅁㄴㅇㄹ'}); //삭제하는 방법
      //const pro2 = await Product.deleteOne({name: 'ㅁㄴ'}); //삭제하는 방법
      res.render('product',{products});
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  // .post(async (req, res, next) => {
  //   try {
  //     const product = await Product.create({
  //       name: req.body.name,
  //       price: req.body.price,
  //       inventory: req.body.inventory,
  //       source: req.body.source,
  //     });
  //     console.log(product);
  //     res.status(201).json(product);
  //   } catch (err) {
  //     console.error(err);
  //     next(err);
  //   }
  // });

module.exports = router;