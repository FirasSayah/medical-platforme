'use strict';

var _ = require('lodash');
var Patient = require('./patient.model.js');
var User = require('../user/user.model.js');

// Get the lsit of patient for  specified association

exports.myPatients = function(req, res) {
  Patient.find({'uid' : req.user.email},function (err, patients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(patients);
  }).populate('hotel').populate('doctor')// only return the Persons name

};

// Get the doctor's name for a specified patient

/*exports.myDoctors = function(req, res) {
  User.find({'doctor' : req.user.name},function (err, patients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(patients);
  });
};*/

// Get list of associations
exports.index = function(req, res) {
  var q = req.query;
  // setTimeout(function(){
  Patient.find(q, function (err, patients) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(patients);
    });
  // },1000);
};

// Get a single patient
exports.show = function(req, res) {
  Patient.findById(req.params.id, function (err, patient) {
    if(err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    return res.json(patient);
  });
};

// Creates a new patient in the DB.
exports.create = function(req, res) {
  req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Patient.create(req.body, function(err, patient) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(patient);
  });
};

// Updates an existing patient in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
 // req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
  req.body.slug = req.body.info.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');

  Patient.findById(req.params.id, function (err, patient) {
    if (err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    var updated = _.extend(patient, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(patient);
    });
  });
};

// Deletes a patient from the DB.
exports.destroy = function(req, res) {
  Patient.findById(req.params.id, function (err, patient) {
    if(err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    patient.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
