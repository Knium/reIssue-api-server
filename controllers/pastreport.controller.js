const PastReport = require('../models/pastreport.model');
const ObjectId = require('mongoose').Types.ObjectId;

function get(req, res) {
  PastReport.find({})
  .then((reports) => { res.json(reports); });
}

function upload(req, res) {
  const pastReport = new PastReport({
    subjectId: ObjectId(req.body.subjectId),
    path: req.file.path,
  });
  pastReport.save()
  .then((saved) => { res.json(saved); });
}

module.exports = {
  get,
  upload,
};
