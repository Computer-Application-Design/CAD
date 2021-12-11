const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');
const config = require('./config');
const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');

const Port = config.port;

const app = express();

const DB_HOST = config.db_host;
const DB_NAME = config.db_name;
const DB_DOCKER = config.db_docker;
const DB_USER = config.db_user;
const DB_PASS = config.db_pass;
mongoose.connect(`mongodb://${DB_DOCKER}/${DB_NAME}`, {
  dbName: DB_NAME,
  useNewUrlParser: true
}, (error) => {
  if(error) {
    console.log('몽고db 연결 에러', error);
  }else{
    console.log('몽고db 연결 성공');
  }
}); 

//Connect to Mongo

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('연결 끊김, 재연결 시도');
  mongoose.connect();
});

app.set('view engine', 'pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use( shopRoutes);


app.use('*', (req, res, next ) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen( Port, ( ) => {
    console.log(`Server is running on port: ${Port}`);
})