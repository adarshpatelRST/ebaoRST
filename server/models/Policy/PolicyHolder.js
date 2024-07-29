/*

*/
const mongoose = require('mongoose');

const PolicyHolderSchema = new mongoose.Schema({
  CommercialRegistrationExpiryDate: { type: Date, required: true },
  CommercialRegistrationNumber: { type: Number, required: true },
  EnglishName: { type: String, required: true },
  ExpectedPremium: { type: mongoose.Types.Decimal128, required: true },
  GeneralManagerID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  GeneralManagerIdExpiryDate: { type: Date, required: true },
  GeneralManagerName: { type: String, required: true },
  Industry: { type: Number, required: true },
  IsBeneficiary: { type: Boolean, required: true },
  IsPolicyHolder: { type: Boolean, required: true },
  Nationality: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true }
});

module.exports = mongoose.model('PolicyHolder', PolicyHolderSchema);
