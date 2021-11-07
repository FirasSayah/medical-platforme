'use strict';

var express = require('express');
var controller = require('./patient.controller.js');
var auth = require('../../auth/auth.service');

var router = express.Router();
/**
 *
 PUT => If user can update all or just a portion of the record, use PUT (user controls what gets updated)

 PUT /users/123/email
 new.email@example.org

 PATCH => If user can only update a partial record, say just an email address (application controls what can be updated), use PATCH.

 PATCH /users/123
 [description of changes]
 *
 */
router.get('/my',auth.isAuthenticated(), controller.myPatients);
router.get('/', auth.isAuthenticated(),controller.index);
router.get('/:id',auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id',auth.isAuthenticated(), controller.update);
router.patch('/:id',auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
