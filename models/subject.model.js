const mongoose = require('../config');

const subjectSchema = new mongoose.Schema({
  name: String,
  course: [String],
  dayOfWeek: String,
  period: Number,
});

module.exports = mongoose.model('Subject', subjectSchema);
