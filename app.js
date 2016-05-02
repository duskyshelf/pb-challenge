var express = require('express');
var app = express();

app.get('/about-page', function (req, res) {
  res.send('Hello World!');
});

app.get('/jobs', function (req, res) {
  res.send('Hello World!');
});

app.get('/valves', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});