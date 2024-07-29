/*

*/
const mongoose = require('mongoose');

const PolicyHolderPrimaryAccountSchema = new mongoose.Schema({
  BankAccount: { type: Number, required: true },
  Iban: { type: mongoose.Types.Decimal128, required: true },
  LocalBank: { type: Number, required: true },
  LocalForeign: { type: Number, required: true },
  PrimaryBankAccount: { type: String, required: true },
  PolicyHolderId: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyHolder', required: true }
});

module.exports = mongoose.model('PolicyHolderPrimaryAccount', PolicyHolderPrimaryAccountSchema);
