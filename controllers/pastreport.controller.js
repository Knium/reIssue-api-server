const PastReport = require('../models/pastreport.model');
const ObjectId = require('mongoose').Types.ObjectId;
const Subject = require('../models/subject.model');

function get(req, res) {
  PastReport.find({})
  .then((reports) => { res.json(reports); });
}

function upload(req, res) {
  const extention = req.file.originalname.split('.')[1];
  const path = `${req.file.path.replace(/public/g, '')}.${extention}`;
  const filename = `${req.file.filename}.${extention}`;
  const pastReport = new PastReport({
    subjectId: ObjectId(req.body.subjectId),
    path,
    filename,
  });
  pastReport.save()
  .then(() => {
    res.redirect(301, 'http://knium.net:5000/user.html');
    Subject.findById(ObjectId(req.body.subjectId))
      .then((subject) => {
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
