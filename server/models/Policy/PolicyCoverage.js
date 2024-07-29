/*

*/
const mongoose = require('mongoose');

const PolicyCoverageSchema = new mongoose.Schema({
  ActualPremium: { type: mongoose.Types.Decimal128, required: true },
  AnnualPremiumBFD: { type: mongoose.Types.Decimal128, required: true },
  AnnualPremiumRate: { type: mongoose.Types.Decimal128, required: true },
  From: { type: Date, required: true },
  ODLlimit: { type: Number, required: true },
  TPLLimit: { type: Number, required: true },
  PolicyPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyPlan', required: true },
  FlatPremium: { type: Number, required: true },
  Deductible: { type: Number, required: true },
  FlatPremiumBFD: { type: Number, required: true },
  Limit: { type: Number, required: true },
  LimitPerDay: { type: Number, required: true },
  NumberOfDays: { type: Number, required: true }
});

module.exports = mongoose.model('PolicyCoverage', PolicyCoverageSchema);
