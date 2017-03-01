const Subject = require('../models/subject.model');

function get(req, res) {
  Subject.find({}).exec()
    .then(
      (subjects) => { res.json(subjects); });
}

function _get() {
  return Subject.find({}).exec();
}

module.exports = { get, _get };
