/*
{
  "Id": "unique_identifier",
  "UserName": "username",
  "Email": "user@example.com",
  "Password": "hashed_password",
  "FirstName": "First",
  "LastName": "Last",
  "CreatedOn": "2023-07-18T00:00:00Z",
  "UpdatedOn": "2023-07-18T00:00:00Z",
  "IsActive": true
}
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    unique: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  CreatedOn: {
    type: Date,
    default: Date.now,
    required: true
  },
  UpdatedOn: {
    type: Date
  },
  IsActive: {
    type: Boolean,
    default: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
