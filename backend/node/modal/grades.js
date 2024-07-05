const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  test:{
    type: String,
    required: true,
  },
  score:{
    type: String,
    required: true,
  }
});

const gradeSchema = new Schema({
    exams: [testSchema],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Grades = mongoose.model('Grades', gradeSchema);
module.exports = Grades;