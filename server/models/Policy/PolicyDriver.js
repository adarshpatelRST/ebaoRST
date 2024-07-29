/*

*/
const mongoose = require('mongoose');

const PolicyDriverSchema = new mongoose.Schema({
  AdditionalNumber: { type: Number, required: true },
  ArabicName: { type: String, required: true },
  BirthDate: { type: Date, required: true },
  BuildingNumber: { type: Number, required: true },
  DistrictName: { type: String, required: true },
  DriverEducation: { type: String, required: true },
  DriverName: { type: String, required: true },
  Gender: { type: String, required: true, enum: ['Male', 'Female'] },
  Lessee: { type: String, required: false },
  LicenseNo: { type: Number, required: true },
  LicenseType: { type: String, required: true },
  LicenseYear: { type: Date, required: true },
  Mobile: { type: String, required: true }, // Phone numbers are typically stored as strings
  Nationality: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
  StreetName: { type: String, required: true },
  Usage: { type: Number, required: true },
  ZipCode: { type: Number, required: true }
});

module.exports = mongoose.model('PolicyDriver', PolicyDriverSchema);
