/*

*/
const mongoose = require('mongoose');

const PolicyHolderPrimaryAddressSchema = new mongoose.Schema({
  AdditionalCode: { type: Number, required: true },
  AddressType: { type: String, enum: ['Permanent', 'Work'], required: true },
  BuildingNumber: { type: Number, required: true },
  City: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
  Country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
  DistrictName: { type: String, required: true },
  Latitude: { type: mongoose.Types.Decimal128, required: true },
  Longitude: { type: mongoose.Types.Decimal128, required: true },
  PostCode: { type: Number, required: true },
  PrimaryAddress: { type: String, required: true },
  StreetName: { type: String, required: true },
  UnitNumber: { type: Number, required: true },
  PolicyHolderId: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyHolder', required: true }
});

module.exports = mongoose.model('PolicyHolderPrimaryAddress', PolicyHolderPrimaryAddressSchema);
