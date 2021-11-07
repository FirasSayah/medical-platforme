'use strict';

var mongoose = require('mongoose');
var User = require('./user.model');
var Patient = mongoose.model('Patient');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.status(500).send(err);
    res.status(200).json(users);
  });
};

/**
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(401).send('Unauthorized');
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).send(err);
    return res.status(204).send('No Content');
  });
};

/**
 * Change a users profile
 */
 exports.changePassword = function(req, res, next) {
   var userId = req.user._id;
   var oldPass = String(req.body.oldPassword);
   var newPass = String(req.body.newPassword);
   var newN = String(req.body.newName);
   var newM = String(req.body.neweMail);
   var depart = String(req.body.newdepartureDate);
   var depart2 = String(req.body.newdepartureDate2);
   var depart3 = String(req.body.newdepartureDate3);
   var newp = String(req.body.newphone);
   var newa = String(req.body.newaddress);
   var news = String(req.body.newspeciality);
   var newc = String(req.body.newcapacity);
   var newl = String(req.body.newlocation);
   User.findById(userId, function (err, user) {
     if(user.authenticate(oldPass)) {
       user.password = newPass;
       user.name = newN;
       user.email = newM;
       user.departureDate = depart;
       user.departureDate2 = depart2;
       user.departureDate3 = depart3;
       user.phone = newp;
       user.address = newa;
       user.speciality = news;
       user.capacity = newc;
       user.location = newl;
       user.save(function(err) {
         if (err) return validationError(res, err);
         res.status(200).send('OK');
       });
     } else {
       res.status(403).send('Forbidden');
     }
   });
 };


exports.changePasswordHotel = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);
  var phone = String(req.body.phone);
  var location = String(req.body.location);
  var newN = String(req.body.newName);
  var newM = String(req.body.neweMail);
  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.name = newN;
      user.email = newM;
      user.phone = phone;
      user.location = location;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.status(200).send('OK');
      });
    } else {
      res.status(403).send('Forbidden');
    }
  });
};
/**
 * Update
 */
// Updates an existing user in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  //req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.updated = Date.now();
  if(!req.body.slug && req.body.info)
    req.body.slug = req.body.info.toString().toLowerCase()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
      .replace(/^-+/, '')          // Trim - from start of text
      .replace(/-+$/, '');

  User.findById(req.params.id, function (err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.status(404).send('Not Found'); }
    var updated = _.extend(user, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(user);
    });
  });
};
/**
 * Get my info
 */
exports.me = function(req, res, next) {
  var userId = req.user._id;
  console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz')
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt

    if (err) return next(err);

    if (!user) return res.status(401).send('Unauthorized');
    res.json(user);
  });
};



/**
 * Adding patient to doctor user
 */
exports.takeCase = function(req, res) {

  var userId = req.body.userId;
  var patientId = req.body.patientId;

  console.log("the doctor id is: ",userId, "the patient id is: ", patientId);

  User.findById(userId, function(err,user){
    user.patients.push(patientId);
    user.save();
  });
  Patient.findById(patientId, function(err,patient){
    patient.doctor = userId;
    patient.in = "doctor";
    patient.departure_date="25/06/2017";
    patient.save();
    res.end();
  });
};
exports.hoteltakeCase = function(req, res) {

  var userId = req.body.userId;
  var patientId = req.body.patientId;


  User.findById(userId, function(err,user){
    user.patients.push(patientId);
    user.save();
    res.end();
  });
};

exports.updateloction = function(req, res) {

  var userId = req.body.userId;
  var location = req.body.location;


  User.findById(userId, function(err,user){
    user.location=location;
    user.save();
    res.end();
  });
};

/**
 * make patient critical by doctor
 */
exports.makeCritical = function(req, res) {

  var userId = req.body.userId;
  var patientId = req.body.patientId;

  console.log("the doctor id is: ",userId, "the patient id is: ", patientId);

  Patient.findById(patientId, function(err,patient){
    if(patient.critical == false){
    patient.critical = true;
    patient.departure_date = "25/06/2017";
    }
    else{
      patient.critical = false;
    }
    patient.save();
    res.end();
  });
};





exports.PatientAddInformation = function(req, res) {

  var conclusion = req.body.conclusion;
  var patientId = req.body.patientId;
  var date = req.body.date;

  console.log("conclusion add by doctor: ",conclusion, "the patient id is: ", patientId);

  Patient.findById(patientId, function(err,patient){
    patient.conclusion = conclusion;
    patient.departure_date = date;
    patient.save();
    res.end();
  });
};

/**
 * deleting patient from doctor user
 */
exports.showTookenCases = function (req,res) {
  var userId = req.params.id;
  console.log("le user id est ", userId);
  User.findById(userId, function (err,user){

    console.log("the user with populate : ", user);

    res.json(user.patients);
  }).populate('patients');

};

/**11
 * deleting patient from doctor
 */

exports.deleteCase = function(req, res) {

  var userId = req.body.userId;
  var patientId = req.body.patientId;

  console.log("the doctor id is: ",userId, "the patient id is: ", patientId);

  User.findById(userId, function(err,user){
    var index = user.patients.indexOf(patientId);
    if(index > -1){
      user.patients.splice(index,1);
    }
    user.save();
    res.json(user);
  });
  Patient.findById(patientId, function(err,patient){
    patient.doctor=null;
    patient.in="association";
    patient.save();
  });
};

exports.deletePatient = function(req, res) {

  var userId = req.body.userId;
  var patientId = req.body.patientId;
  console.log("aaaaa");
  User.findById(userId, function(err,user){
    var index = user.patients.indexOf(patientId);
    if(index > -1){
      user.patients.splice(index,1);
    }
    user.save();
    res.json(user);
  });
  Patient.findById(patientId, function(err,patient){
    patient.hotel=null
    ;
    patient.save();
  });
};





/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
