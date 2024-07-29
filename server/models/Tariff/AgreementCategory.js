/*
{
  "Id": "unique_identifier",
  "CategoryName": "Sample Category",
  "CreatedBy": "user_id",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedBy": "user_id",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/

const mongoose = require('mongoose');

const AgreementCategorySchema = new mongoose.Schema({
  CategoryName: { type: String, required: true },
  CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  CreatedOn: { type: Date, default: Date.now },
  UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  UpdatedOn: { type: Date },
  IsActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('AgreementCategory', AgreementCategorySchema);
