const express = require('express');

const fs = require('fs');

const app = express();

app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.get('/create-file', (req, res, next) => {
  fs.writeFile('./data/test.txt', 'hello', () => {
    res.send('success');
  });
});

app.get('/file', (req, res, next) => {
  fs.readFile('./data/test.txt', (err, ctx) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(ctx);
    }
  });
});

app.listen(3000, () => {
  console.log('run');
})
