
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');

const Port = 3000;

const app = express();

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
