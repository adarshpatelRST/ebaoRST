/*
{
  "Id": "unique_identifier",
  "TariffName": "Sample Tariff",
  "TariffOwnerId": "user_id",
  "ChannelCode": "channel_code",
  "AgreementCode": "agreement_code",
  "AccountNumber": "account_number",
  "CreatedBy": "user_id",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedBy": "user_id",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/

const mongoose = require('mongoose');

const tariffSchema = new mongoose.Schema({
  TariffName: {
    type: String,
    required: true
  },
  TariffOwnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ChannelCode: {
    type: String,
    required: true
  },
  AgreementCode: {
    type: String,
    required: true
  },
  AccountNumber: {
    type: String,
    required: true
  },
  CreatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  CreatedOn: {
    type: Date,
    default: Date.now,
    required: true
  },
  UpdatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  UpdatedOn: {
    type: Date
  },
  IsActive: {
    type: Boolean,
    default: true
  }
});

// Middleware to set UpdatedOn before saving
tariffSchema.pre('save', function (next) {
  this.UpdatedOn = new Date();
  next();
});

const Tariff = mongoose.model('Tariff', tariffSchema);

module.exports = Tariff;
