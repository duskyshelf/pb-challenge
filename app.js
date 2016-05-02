var express = require('express');
var app = express();

var contentOptions = {
  root: __dirname + '/content/'
};

app.get('/about-page', function (req, res) {
  res.sendFile('/about-page/index.md', contentOptions);
});

app.get('/jobs', function (req, res) {
  res.sendFile('/jobs/index.md', contentOptions);
});

app.get('/valves', function (req, res) {
  res.sendFile('/valves/index.md', contentOptions);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});