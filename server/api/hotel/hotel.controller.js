'use strict';

var _ = require('lodash');
var Hotel = require('./hotel.model.js');

// Get list of brands
exports.index = function(req, res) {
  var q = req.query;
  // setTimeout(function(){
  Hotel.find(q, function (err, hotels) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(hotels);
    });
  // },1000);
};

// Get a single hotel
exports.show = function(req, res) {
  Hotel.findById(req.params.id, function (err, hotel) {
    if(err) { return handleError(res, err); }
    if(!hotel) { return res.status(404).send('Not Found'); }
    return res.json(hotel);
  });
};

// Creates a new hotel in the DB.
exports.create = function(req, res) {
  req.body.uid = req.user.email; // id change on every loginHotel hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Hotel.create(req.body, function(err, hotel) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(hotel);
  });
};

// Updates an existing hotel in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.uid = req.user.email; // id change on every loginHotel hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Hotel.findById(req.params.id, function (err, hotel) {
    if (err) { return handleError(res, err); }
    if(!hotel) { return res.status(404).send('Not Found'); }
    var updated = _.extend(hotel, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(hotel);
    });
  });
};

// Deletes a hotel from the DB.
exports.destroy = function(req, res) {
  Hotel.findById(req.params.id, function (err, hotel) {
    if(err) { return handleError(res, err); }
    if(!hotel) { return res.status(404).send('Not Found'); }
    hotel.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
