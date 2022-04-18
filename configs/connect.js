const mysql =require('mysql');
require('dotenv').config();
const db =mysql.createConnection({
    user:process.env.DB_USER,
    host:3306,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
  });
module.exports = db;
