const Subject = require('../models/subject.model');

function get(req, res) {
  return Subject.find({})
  .exec((err, subject) => {
    res.json(subject);
  });
}

module.exports = { get };
