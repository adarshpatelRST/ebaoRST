/*

*/
const mongoose = require('mongoose');

const PolicyLineSchema = new mongoose.Schema({
  AgeLimitForAgency: { type: Number, required: true },
  AgeLimitForNonAgency: { type: Number, required: true },
  LoyaltyDiscountApplicable: { type: mongoose.Types.Decimal128, required: true },
  RenewalBusiness: { type: String, required: true },
  TowingLimitOfHeavyCommercialVehicles: { type: Number, required: true },
  TowingLimitOfLightVehicle: { type: Number, required: true }
});

module.exports = mongoose.model('PolicyLine', PolicyLineSchema);
