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

const agreementCategorySchema = new mongoose.Schema({
  CategoryName: {
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
agreementCategorySchema.pre('save', function (next) {
  this.UpdatedOn = new Date();
  next();
});

const AgreementCategory = mongoose.model('AgreementCategory', agreementCategorySchema);

module.exports = AgreementCategory;
