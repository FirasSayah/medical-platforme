/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Agency = require('./agency.model.js');

exports.register = function(socket) {
  Agency.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Agency.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('agency:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('agency:remove', doc);
}
