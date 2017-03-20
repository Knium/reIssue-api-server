const PastReport = require('../models/pastreport.model');
const ObjectId = require('mongoose').Types.ObjectId;
const Subject = require('../models/subject.model');

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
  .then((savedReport) => {
    res.json(savedReport);
    Subject.findById(ObjectId(req.body.subjectId))
      .then((subject) => {
        console.log(subject);
        subject.pastReport.push(ObjectId(pastReport._id));
        subject.save();
      });
  });
}

module.exports = {
  get,
  upload,
};
