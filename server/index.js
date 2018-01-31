const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const products = require('./routes/router');
mongoose.Promise = global.Promise;
const app = express();
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
const port = process.env.PORT || 3001;
mongoose.connect('mongodb://localhost/products')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use('/products', products);
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
