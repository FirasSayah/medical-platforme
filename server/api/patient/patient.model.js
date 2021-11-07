'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatientSchema = new Schema({

  lastName:String,
  firstName:String,
  age:String,
  Cinematography:String,
  gender:String,
  cin:String,
  departure_date:String,
  reasonForHospitalisation:String,
  AntecedentsFamily:String,
  wayOfLife:String,
  HomeTreatment:String,
  historyOfTheDisease:String,
  physicalExamination:String,
  conclusion:String,
  ParaClinicalReview:String,
  speciality_doctor:String,
  doctor: {type: Schema.Types.ObjectId, ref: 'User'},
  hotel: {type: Schema.Types.ObjectId, ref: 'User'},
  critical:{ type: Boolean, default: false },
  from: String,
  to:String,
  active: { type: Boolean, default: true },
  in: { type: String, default: 'association' },
  updated: {type: Date, default: Date.now},
  uid: String,
  slug: String

});

module.exports = mongoose.model('Patient', PatientSchema);
