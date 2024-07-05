const mongoose = require('mongoose');
const { Schema } = mongoose;

const academicSchema = new Schema({
  degree:{
    type: String,
    required: true,
  },
  program:{
    type: String,
  },
  specialization:{
    type: String,
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Academic = mongoose.model('Academic', academicSchema);
module.exports = Academic;