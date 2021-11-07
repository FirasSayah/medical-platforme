'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HotelSchema = new Schema({
  _id:String,
  patient_name: String,
  patient_id: String,
  patient_cin: String,
  datetoken: Date,
  datehosted: Date,
  datefinished: Date,
  patient_from: String,
  hosted: String,
  finished: String,
  patient_age: String,
  patient_gender: String,
  critical:{ type: Boolean, default: true },
  patient_to: String,
  association_id: String,
  hotel_id: String,
  in:String
});

module.exports = mongoose.model('Hotel', HotelSchema);
