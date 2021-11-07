'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id/password', auth.isAuthenticated(), controller.changePasswordHotel);
router.put('/:id', auth.hasRole('admin'), controller.update);
router.patch('/:id', auth.hasRole('admin'), controller.update);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.post('/takeCase', controller.takeCase);
router.post('/hoteltakeCase', controller.hoteltakeCase);
router.post('/makeCritical', controller.makeCritical);
router.get('/showTookenCases/:id', controller.showTookenCases);
router.post('/deleteCase', controller.deleteCase);
router.post('/PatientAddInformation', controller.PatientAddInformation);
router.post('/deletePatient', controller.deletePatient);
router.post('/updateloction', controller.updateloction);

module.exports = router;

