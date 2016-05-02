var app = require(__dirname + '/../app.js'),
    request = require('request'),
    expect = require("chai").expect;

describe('static-content-challenge', function() {

  describe('requesting valid URLs', function () {
    it('about-page should return 200', function (done) {
      request('http://localhost:3000/about-page', function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('jobs should return 200', function (done) {
      request('http://localhost:3000/jobs', function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('valves should return 200', function (done) {
      request('http://localhost:3000/valves', function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('serving content', function () {
    it('about-page returns correct content', function (done) {
      request('http://localhost:3000/about-page', function (err, res, body) {
        expect(body).to.contain("This is the About page");
        done();
      });
    });

    it('jobs returns correct content', function (done) {
      request('http://localhost:3000/jobs', function (err, res, body) {
        expect(body).to.contain("Jobs at Acme Co.");
        done();
      });
    });

    it('valves returns correct content', function (done) {
      request('http://localhost:3000/valves', function (err, res, body) {
        expect(body).to.contain("Valves");
        done();
      });
    });
  });

});
