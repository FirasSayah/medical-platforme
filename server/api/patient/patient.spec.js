'use strict';

var should = require('should');
var app = require('../../app');
/*
 The motivation with this module is to provide a high-level abstraction for testing HTTP,
 while still allowing you to drop down to the lower-level API provided by superagent.
 Now you can test AND code new features at the same time
 */
var request = require('supertest');

describe('GET /api/patient', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/patient')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
