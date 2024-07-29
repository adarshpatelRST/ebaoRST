/*

*/
const mongoose = require('mongoose');

const PolicyRiskSchema = new mongoose.Schema({
  AntiLockBrakingSystem: { type: Number, required: true },
  ChassisNo: { type: mongoose.Types.Decimal128, required: true },
  InterestEffectiveDate: { type: Date, required: true },
  InterestExpiryDate: { type: Date, required: true },
  InterestStatus: { type: Boolean, required: true },
  IsThereAdditionalModification: { type: Boolean, required: true },
  NcdDiscount: { type: mongoose.Types.Decimal128, required: true },
  PlateNo: { type: Number, required: true },
  PlateNoA: { type: String, required: true },
  PlateNoB: { type: String, required: true },
  PlateNoC: { type: String, required: true },
  PlateType: { type: String, required: true },
  PolicyLineID: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyLine', required: true }
});

module.exports = mongoose.model('PolicyRisk', PolicyRiskSchema);
