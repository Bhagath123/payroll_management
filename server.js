const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser =require('body-parser');
const connection = require('./configs/connect');
const port = process.env.APP_PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

connection.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});


