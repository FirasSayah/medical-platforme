'use strict';

var _ = require('lodash');
var Agency = require('./agency.model.js');

// Get list of brands
exports.index = function(req, res) {
  var q = req.query;
  // setTimeout(function(){
  Agency.find(q, function (err, agencys) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(agencys);
    });
  // },1000);
};

// Get a single agency
exports.show = function(req, res) {
  Agency.findById(req.params.id, function (err, agency) {
    if(err) { return handleError(res, err); }
    if(!agency) { return res.status(404).send('Not Found'); }
    return res.json(agency);
  });
};

// Creates a new agency in the DB.
exports.create = function(req, res) {
  req.body.uid = req.user.email; // id change on every loginAgency hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Agency.create(req.body, function(err, agency) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(agency);
  });
};

// Updates an existing agency in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.uid = req.user.email; // id change on every loginAgency hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Agency.findById(req.params.id, function (err, agency) {
    if (err) { return handleError(res, err); }
    if(!agency) { return res.status(404).send('Not Found'); }
    var updated = _.extend(agency, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(agency);
    });
  });
};

// Deletes a agency from the DB.
exports.destroy = function(req, res) {
  Agency.findById(req.params.id, function (err, agency) {
    if(err) { return handleError(res, err); }
    if(!agency) { return res.status(404).send('Not Found'); }
    agency.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
