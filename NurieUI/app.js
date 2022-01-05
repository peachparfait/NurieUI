const express = require('express');
const mysql = require('mysql2');
const app = express();
const password = require( "./password.json" );

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: password.rootPassword,
  database: 'test'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
});
app.get('/', function (req, res) {
  connection.query('select * from items', function (error, results, fields) {
    if (error) throw error;
    res.send(results[0].name);
  });
});
app.listen(3000);

