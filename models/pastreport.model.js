const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;

const pastReportSchema = new mongoose.Schema({
  subjectId: ObjectId,
  path: String,
});

module.exports = mongoose.model('PastReport', pastReportSchema);
