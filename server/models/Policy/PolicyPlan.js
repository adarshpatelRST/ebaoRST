/*

*/
const mongoose = require('mongoose');

const PolicyPlanSchema = new mongoose.Schema({
  ActualPremium: { type: mongoose.Types.Decimal128, required: true },
  CommissionRate: { type: mongoose.Types.Decimal128, required: true },
  MinDeductibleForPartialLoss: { type: Number, required: true },
  ProductionYear: { type: Date, required: true },
  SequenceNo: { type: Number, required: true },
  SumInsured: { type: Number, required: true },
  UseOfVehicle: { type: String, required: true },
  VehicleMake: { type: String, required: true },
  VehicleRegion: { type: String, required: true },
  VehicleType: { type: String, required: true },
  VehicleUsage: { type: Number, required: true }
});

module.exports = mongoose.model('PolicyPlan', PolicyPlanSchema);
