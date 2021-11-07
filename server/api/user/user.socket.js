/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var User = require('./user.model.js');

exports.register = function(socket) {
  User.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  User.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}
/**
 * Emits an event which notifies listeners and passes extra
 * arguments.
 *
 * @param {string} eventName Name of the event to fire.
 */

function onSave(socket, doc, cb) {
  socket.emit('user:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('user:remove', doc);
}
