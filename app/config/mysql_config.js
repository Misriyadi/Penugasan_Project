'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testnodejs_1'
});

connection.connect();

module.exports = connection;
