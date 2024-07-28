/*
{
  "Id": "unique_identifier",
  "CoverageName": "Sample Coverage",
  "CoverageCode": "coverage_code",
  "Limit": 100,
  "CoveredCountry": "Country Name",
  "DriverCounts": 10,
  "Amount": 1000.00,
  "CreatedBy": "user_id",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedBy": "user_id",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/

const mongoose = require('mongoose');

const coverageSchema = new mongoose.Schema({
  CoverageName: {
    type: String,
    required: true
  },
  CoverageCode: {
    type: String,
    required: true
  },
  Limit: {
    type: Number,
    required: true
  },
  CoveredCountry: {
    type: String,
    required: true
  },
  DriverCounts: {
    type: Number,
    required: true
  },
  Amount: {
    type: mongoose.Types.Decimal128,
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
coverageSchema.pre('save', function (next) {
  this.UpdatedOn = new Date();
  next();
});

const Coverage = mongoose.model('Coverage', coverageSchema);

module.exports = Coverage;
