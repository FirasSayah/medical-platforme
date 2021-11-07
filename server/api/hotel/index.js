'use strict';

var express = require('express');
var controller = require('./hotel.controller.js');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('hotel'), controller.index);
router.get('/:id', auth.hasRole('hotel'), controller.show);
router.post('/', auth.hasRole('hotel'), controller.create);
router.put('/:id', auth.hasRole('hotel'), controller.update);
router.patch('/:id', auth.hasRole('hotel'), controller.update);
router.delete('/:id', auth.hasRole('hotel'), controller.destroy);

module.exports = router;
