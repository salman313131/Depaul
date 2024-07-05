const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    sparse: true 
  },
  password: {
    type: String
  },
  number: {
    type: String
  },
  gender :{
    type: String,
    enum: ['male', 'female', 'other']
  },
  dob:{
    type: Date
  },
  country:{
    type: String
  },
  state:{
    type: String
  },
  city:{
    type: String
  },
  citizenship:{
    type: String
  },
  languages:{
    type: [String]
  },
  profilePic:{
    type: String
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;