var express = require('express');
var path = require('path');
var url = require('url');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res, next)=>{
  res.send('type message here');
});

app.use((req, res)=>{
  res.status(404);
  res.redirect('/static/error404.html');
});

module.exports = app;
