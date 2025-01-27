/*
{
  "Id": "unique_identifier",
  "TariffId": "tariff_id",
  "CoverageId": "coverage_id",
  "CreatedBy": "user_id",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedBy": "user_id",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/

const mongoose = require('mongoose');

const TariffCoverageMapperSchema = new mongoose.Schema({
  TariffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tariff', required: true },
  CoverageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coverage', required: true },
  CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  CreatedOn: { type: Date, default: Date.now },
  UpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  UpdatedOn: { type: Date },
  IsActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('TariffCoverageMapper', TariffCoverageMapperSchema);
