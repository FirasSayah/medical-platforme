/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Patient = require('./patient.model.js');

exports.register = function(socket) {
  Patient.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Patient.schema.post('remove', function (doc) {
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
  socket.emit('patient:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('patient:remove', doc);
}
