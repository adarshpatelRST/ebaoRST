/*
{
  "Id": "unique_identifier",
  "AgreementName": "Sample Agreement",
  "AgreementCode": "agreement_code",
  "AgreementCategory": "agreement_category_id",
  "CreatedBy": "user_id",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedBy": "user_id",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/
const mongoose = require('mongoose');

const AgreementSchema = new mongoose.Schema({
  AgreementName: { type: String, required: true },
  AgreementCode: { type: String, required: true },
  AgreementCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'AgreementCategory', required: true },
  CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  CreatedOn: { type: Date, default: Date.now },
  UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  UpdatedOn: { type: Date },
  IsActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Agreement', AgreementSchema);
