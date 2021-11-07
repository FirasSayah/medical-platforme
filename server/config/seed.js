/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Hotel = require('../api/hotel/hotel.model');
var User = require('../api/user/user.model');
var Patient = require('../api/patient/patient.model');





/*Feature.find(function (err, data) {
 if(data.length < 1){
 Feature.create(
 {"key" : "AFRICA ", "val" : "Tunisia", "active" : true},
 {"key" : "AFRICA ", "val" : "Egypt", "active" : true},
 {"key" : "AFRICA ", "val" : "Algeria", "active" : true},
 {"key" : "AFRICA ", "val" : "Morocco", "active" : true},
 {"key" : "AFRICA ", "val" : "South Africa", "active" : true},
 {"key" : "ASIA", "val" : "China", "active" : true},
 {"key" : "ASIA", "val" : "India", "active" : true},
 {"key" : "ASIA", "val" : "Japan", "active" : true},
 {"key" : "ASIA", "val" : "Malaysia", "active" : true},
 {"key" : "ASIA", "val" : "Thailand", "active" : true},
 {"key" : "EUROPE", "val" : "Austria", "active" : true},
 {"key" : "EUROPE", "val" : "Germany", "active" : true},
 {"key" : "EUROPE", "val" : "Italy", "active" : true},
 {"key" : "EUROPE", "val" : "Spain", "active" : true},
 {"key" : "EUROPE", "val" : "Sweden", "active" : true},
 {"key" : "N. AMERICA", "val" : "Canada", "active" : true},
 {"key" : "N. AMERICA", "val" : "Mexico", "active" : true},

 {"key" : "S. AMERICA", "val" : "Argentina", "active" : true},
 {"key" : "S. AMERICA", "val" : "Colombia", "active" : true},
 {"key" : "S. AMERICA", "val" : "Brazil", "active" : true},
 {"key" : "S. AMERICA", "val" : "Peru", "active" : true}
 );
 }
 });

 /*Setting.find(function (err, data) {
 if(data.length < 1){
 Setting.create({
 "minOrderValue" : 20,
 "shippingCharge" : 15
 });
 }
 });
 */


// Setting.find(function (err, data) {
//   if(data.length < 1){
//     Setting.create({
//       paypal : '2lessons@gmail.com'
//     });
//   }
// });



User.find(function (err, data) {
  if(data.length < 100){
    User.create({
      provider: 'local',
      role: 'admin',
      phone:'25119800',
      address : 'tunis',
      speciality:'admin',
      capacity:'none',
      location:'monastir',
      name: 'Admin',
      email: 'admin@isim.tn',
      password: 'admin'
    },{
      provider: 'local',
      role: 'agency',
      phone:'25119800',
      address : 'tunis',
      speciality:'admin',
      capacity:'none',
      departureDate:'sssssssssss',
      location:'monastir',
      name: 'Admin',
      email: 'agency@isim.tn',
      password: 'agency'
    },{
      provider: 'local',
      role: 'hotel',
      phone:'25119800',
      address : 'tunis',
      speciality:'admin',
      capacity:'none',
      departureDate:'sssssssssss',
      location:'',
      name: 'Admin',
      email: 'hotel@isim.tn',
      password: 'hotel'
    },{
      provider: 'local',
      role: 'association',
      phone:'25119800',
      address : 'tunis',
      speciality:'admin',
      capacity:'none',
      departureDate:'sssssssssss',
      location:'monastir',
      name: 'Admin',
      email: 'association@isim.tn',
      password: 'association'
    },{
      provider: 'local',
      role: 'doctor',
      phone:'25119800',
      address : 'tunis',
      speciality:'admin',
      capacity:'none',
      departureDate:'sssssssssss',
      location:'monastir',
      name: 'Admin',
      email: 'doctor@isim.tn',
      password: 'doctor'
    }, function() {
      console.log('finished populating users');
    });
  }
});

Patient.find(function (err, data) {
  if(data.length < 1){
    Patient.create({
      "_id" : "5607c58bdddfb6780c5bddf3",
      "lastName" : "Taleb",
      "firstName": "Mohamed aziz",
      "age":"23",
      "gender":"male",
      "cin":"09978311",
      "departure_date":"25/06/2017",
      "Cinematography":"Test_consulting",
      "reasonForHospitalisation":"Suspicion of infectious endocarditis",
      "AntecedentsFamily":"Personal: mitral valve prosthesis, smoking a 40 year package",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Antibiotic therapy",
      "historyOfTheDisease" : "Fever of abrupt installation with syncope, causing the patient to be consulted in the emergency room or his hospitalization",
      "physicalExamination" : "Tachycardia, systolic arterial hypertension",
      "ParaClinicalReview" : "ECG, troponin assay, coronary angiography",
      "from" : "Tunisia",
      "to" : "Germany",
      "uid" : "association@isim.tn",
      "active" : true,
      "__v" : 0




    }, {
      "_id" : "5607c599dddfb6780c5bddf4",
      "lastName" : "Nasr",
      "firstName": "Salah",
      "age":"24",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"98647214",
      "departure_date":"25/06/2017",
      "reasonForHospitalisation":"Suspicion of infectious endocarditis",
      "AntecedentsFamily":"personel: smoking, hypertension",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Antibiotic therapy",
      "historyOfTheDisease" : "douleur thoracique intense retrosternale amenant le patient a consulter aux urgences",
      "physicalExamination" : "Tachycardia, systolic arterial hypertension",
      "ParaClinicalReview" : "ECG, troponin assay, coronary angiography",
      "from" : "Tunisia",
      "to" : "monastir",
      "uid" : "association@admin.com",
      "active" : true,
      "__v" : 0
    },{
      "lastName" : "Nasr",
      "firstName": "Moahmed hedi",
      "age":"22",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"694710035",
      "departure_date":"25/06/2017",
      "reasonForHospitalisation":"Acute coronary syndrome with ST segment shift",
      "AntecedentsFamily":"Personal: mitral valve prosthesis, smoking a 40 year package",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Aspirin, clopidogrel, AVK",
      "historyOfTheDisease" : "douleur thoracique intense retrosternale amenant le patient a consulter aux urgences",
      "physicalExamination" : "Fever, asthenia, sweating, systolic murmur",
      "ParaClinicalReview" : "ECG, troponin assay, coronary angiography",
      "from" : "tunisia",
      "to" : "algeria",
      "uid" : "association@isim.tn",
      "active" : true,
      "__v" : 0,
      "_id" : "5607c5c1dddfb6780c5bddf5"
    },{
      "lastName" : "Antar",
      "firstName": "Ahmed",
      "age":"26",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"58565",
      "departure_date":"25/06/2017",
      "reasonForHospitalisation":"Acute coronary syndrome with ST segment shift",
      "AntecedentsFamily":"Personal: mitral valve prosthesis, smoking a 40 year package",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Aspirin, clopidogrel, AVK",
      "historyOfTheDisease" : "Fever of abrupt installation with syncope, causing the patient to be consulted in the emergency room or his hospitalization",
      "physicalExamination" : "Tachycardia, systolic arterial hypertension",
      "ParaClinicalReview" : "ECG, troponin assay, coronary angiography",
      "from" : "tunisia",
      "to" : "tunisia",
      "uid" : "association@isim.tn",
      "active" : true,
      "__v" : 0,
      "_id" : "5607c5c1dddfb6780c5bddf6"
    },{
      "lastName" : "sboui",
      "firstName": "heythem",
      "age":"20",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"64751230",
      "departure_date":"25/06/2017",
      "reasonForHospitalisation":"Acute coronary syndrome with ST segment shift",
      "AntecedentsFamily":"personel: smoking, hypertension",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Antibiotic therapy",
      "historyOfTheDisease" : "douleur thoracique intense retrosternale amenant le patient a consulter aux urgences",
      "physicalExamination" : "Fever, asthenia, sweating, systolic murmur",
      "ParaClinicalReview" : "Hemocultures, doppler echocardiography",
      "from" : "tunisia",
      "to" : "espagne",
      "uid" : "admin@.tn",
      "active" : true,
      "__v" : 0,
      "_id" : "5607c5c1dddfb6780c5bddf7"
    },{
      "lastName" : "beji",
      "firstName": "caid sebsi",
      "age":"92",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"1112456",
      "departure_date":"25/06/2017",
      "reasonForHospitalisation":"Acute coronary syndrome with ST segment shift",
      "AntecedentsFamily":"Personal: mitral valve prosthesis, smoking a 40 year package",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Aspirin, clopidogrel, AVK",
      "historyOfTheDisease" : "douleur thoracique intense retrosternale amenant le patient a consulter aux urgences",
      "physicalExamination" : "Tachycardia, systolic arterial hypertension",
      "ParaClinicalReview" : "Hemocultures, doppler echocardiography",
      "from" : "tunisia",
      "to" : "tunisia",
      "uid" : "association@isim.tn",
      "active" : true,
      "__v" : 0,
      "_id" : "5607c5c1dddfb6780c5bddf8"
    },{
      "lastName" : "chahed",
      "firstName": "youssef",
      "age":"20",
      "Cinematography":"Test_consulting",
      "gender":"male",
      "cin":"58565",
      "departure_date":"25/07/2017",
      "reasonForHospitalisation":"Suspicion of infectious endocarditis",
      "AntecedentsFamily":"personel: smoking, hypertension",
      "wayOfLife":"no additional information",
      "HomeTreatment":"Antibiotic therapy",
      "historyOfTheDisease" : "douleur thoracique intense retrosternale amenant le patient a consulter aux urgences",
      "physicalExamination" : "Fever, asthenia, sweating, systolic murmur",
      "ParaClinicalReview" : "Hemocultures, doppler echocardiography",
      "from" : "tunisia",
      "to" : "tunisia",
      "uid" : "association@isim.tn",
      "active" : true,
      "__v" : 0,
      "_id" : "5607c5c1dddfb6780c5bddf9"
    }, function() {
      console.log('finished populating Patient');
    });
  }
});




