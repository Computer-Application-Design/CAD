//2017152010 made by 김태용
const mongoose = require('mongoose');

const { Schema } = mongoose; // mongoose 객체를 받아옴
const productSchema = new Schema({
      name: {
        type: String,
        required: true,
        unique: true,
      },
      price: {
        type: Number,
        required: true,
      },
      inventory: {
        type: Number,
        required: true,
      },
      source: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model('Product', productSchema); // products라는 컬렉션이 생성된다. 이러한 강제명이 싫다면 세 번째 인수로 컬렉션 이름을 지정해줄 수 있다.


