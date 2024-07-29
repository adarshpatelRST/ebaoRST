/*

*/
const mongoose = require('mongoose');

const PolicyHolderPrimaryContactSchema = new mongoose.Schema({
  ContactPerson: { type: String, required: true },
  Mobile: { type: String, required: true }, // Assuming Phone type as String
  PrimaryContact: { type: String, required: true }, // Assuming Phone type as String
  PolicyHolderId: { type: mongoose.Schema.Types.ObjectId, ref: 'PolicyHolder', required: true }
});

module.exports = mongoose.model('PolicyHolderPrimaryContact', PolicyHolderPrimaryContactSchema);
