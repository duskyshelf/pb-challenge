var fs = require('fs');
var express = require('express');
var app = express();
var markdown = require( "markdown" ).markdown;

// routes
app.get('/about-page', function (req, res) {
  fs.readFile('content/about-page/index.md', 'utf-8', function (err, data) {
    buildRender(res, markdown.toHTML(data));
  });
});

app.get('/jobs', function (req, res) {
  fs.readFile('content/jobs/index.md', 'utf-8', function (err, data) {
    buildRender(res, markdown.toHTML(data));
  });
});

app.get('/valves', function (req, res) {
  fs.readFile('content/valves/index.md', 'utf-8', function (err, data) {
    buildRender(res, markdown.toHTML(data));
  });
});

// app.get('*', function(req, res){
//   res.status(404).send('404 Page Not Found');
// });

// helpers
var buildRender = function(res, page) {
  fs.readFile('template.html', 'utf-8', function (err, data) {
    fullPage = data.replace("{{content}}", page);
    res.send(fullPage);
  });
}

// run
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});