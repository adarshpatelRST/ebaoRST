/*

*/
const mongoose = require('mongoose');

const CoveredCountrySchema = new mongoose.Schema({
  ActualPremium: { type: mongoose.Types.Decimal128, required: true },
  CoveredCountry: { type: Number, required: true },
  Deductible: { type: Number, required: true },
  IsActive: { type: Boolean, required: true },
  To: { type: Date, required: true }
});

module.exports = mongoose.model('CoveredCountry', CoveredCountrySchema);
