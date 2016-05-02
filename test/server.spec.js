var app = require(__dirname + '/../app.js'),
    http = require('http'),
    expect = require("chai").expect;

describe('express server routing', function () {

  it('about-page URL should return 200', function (done) {
    http.get('http://localhost:3000/about-page', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('jobs URL should return 200', function (done) {
    http.get('http://localhost:3000/jobs', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('valves URL should return 200', function (done) {
    http.get('http://localhost:3000/valves', function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

});
