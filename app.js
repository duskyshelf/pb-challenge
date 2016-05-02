var fs = require('fs');
var express = require('express');
var app = express();
var markdown = require('markdown').markdown;

// routing
app.get('/:route', function (req, res) {
  if (contentFolderContains(req.params.route)) {
    var URL = 'content/' + req.params.route + '/index.md';
    fs.readFile(URL, 'utf-8', function (err, data) {
      buildRender(res, markdown.toHTML(data));
    });
  } else {
    res.status(404).send('404 Page Not Found');
  }
});

// helpers
var buildRender = function (res, page) {
  fs.readFile('template.html', 'utf-8', function (err, data) {
    fullPage = data.replace("{{content}}", page);
    res.send(fullPage);
  });
};

var contentFolderContains = function (route) {
  var folders = fs.readdirSync('content');
  return folders.indexOf(route) > -1;
};

// run
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});