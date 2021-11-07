/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Hotel = require('./hotel.model.js');

exports.register = function(socket) {
  Hotel.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Hotel.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('hotel:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('hotel:remove', doc);
}
