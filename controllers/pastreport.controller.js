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
    res.redirect(301, 'https://knium.net')
    Subject.findById(ObjectId(req.body.subjectId))
      .then((subject) => {
        console.log(subject);
        subject.pastReport.push(ObjectId(pastReport._id));
        subject.save();
      });
  });
}

function getBySubjectId(req, res) {
  PastReport.find({ subjectId: req.query._id })
  .then((subjects) => { res.json(subjects); });
}

module.exports = {
  get,
  upload,
  getBySubjectId,
};
