const Subject = require('../models/subject.model');

function get(req, res) {
  Subject.find({}).exec()
    .then(
      (subjects) => {
        res.json(subjects);
      },
  );
}

module.exports = { get };
