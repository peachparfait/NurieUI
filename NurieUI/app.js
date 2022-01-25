const express = require('express');
const mysql = require('mysql2');
const app = express();
const password = require( "./password.json" );

app.use(express.static('public'));
var helmet = require('helmet')
app.use(helmet())
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
  res.send("TOP");
});
app.get('/login', function (req, res) {
  res.send("ログイン");
});
app.get('/signup', function (req, res) {
  res.send("登録");
});
app.get('/forget', function (req, res) {
  res.send("わすれた");
});
app.get('/confirm', function (req, res) {
  res.send("かくにん");
});
app.get('/succeed', function (req, res) {
  res.send("せいこう");
});
app.get('/create', function (req, res) {
  res.send("つくるページ");
});
app.get('/works', function (req, res) {
  res.send("一覧");
});
app.get('/profile', function (req, res) {
  res.send("プロフィール");
});
app.get('/settings', function (req, res) {
  res.send("設定");
});
app.listen(3000);

