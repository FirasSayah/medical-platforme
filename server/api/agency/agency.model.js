'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgencySchema = new Schema({
  _id:String,
  patient_name: String,
  patient_id: String,
  patient_cin: String,
  patient_from: String,
  patient_departure_date:Date,
  patient_age: String,
  patient_gender: String,
  parent_critical:{ type: Boolean, default: true },
  patient_to: String,
  association_id: String,
  agency_id: String,
  in:String
});

module.exports = mongoose.model('Agency', AgencySchema);
