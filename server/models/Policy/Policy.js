/*

*/

const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  ActualPremium: { type: mongoose.Types.Decimal128, required: true },
  AdjustedNetPremium: { type: mongoose.Types.Decimal128, required: true },
  AgreementCode: { type: mongoose.Types.Decimal128, required: true },
  ChannelCode: { type: Number, required: true },
  ExchangeRate: { type: Number, required: true },
  FeeAmount: { type: Number, required: true },
  GrossPremium: { type: mongoose.Types.Decimal128, required: true },
  NetPremium: { type: mongoose.Types.Decimal128, required: true },
  PolicyCurrency: { type: String, required: true },
  PolicyEffectiveDate: { type: Date, required: true },
  PolicyExpiryDate: { type: Date, required: true },
  PolicyNo: { type: Number, required: true },
  PolicyStatus: { type: Boolean, required: true },
  PremiumDue: { type: Number, required: true },
  ProductCode: { type: mongoose.Schema.Types.ObjectId, ref: 'Coverage', required: true },
  QuotationDate: { type: Date, required: true },
  QuotationNumber: { type: Number, required: true },
  QuotationValidationDays: { type: Number, required: true },
  TariffOwner: { type: String, required: true },
  TaxAmount: { type: mongoose.Types.Decimal128, required: true }
});

module.exports = mongoose.model('Policy', PolicySchema);
