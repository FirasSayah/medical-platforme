'use strict';

var express = require('express');
var controller = require('./agency.controller.js');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('agency'), controller.index);
router.get('/:id', auth.hasRole('agency'), controller.show);
router.post('/', auth.hasRole('agency'), controller.create);
router.put('/:id', auth.hasRole('agency'), controller.update);
router.patch('/:id', auth.hasRole('agency'), controller.update);
router.delete('/:id', auth.hasRole('agency'), controller.destroy);

module.exports = router;
