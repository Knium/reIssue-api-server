const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;
const subjectSchema = new mongoose.Schema({
  name: String,
  course: [String],
  dayOfWeek: String,
  period: Number,
});

module.exports = mongoose.model('Subject', subjectSchema);
