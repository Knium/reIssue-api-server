const Subject = require('../models/subject.model');

function get(req, res) {
  Subject.find({}).exec()
    .then(
      (subjects) => { res.json(subjects); });
}

function _get() {
  return Subject.find({}).exec();
}

function getById(req, res) {
  Subject.findById(req.params._id).exec()
  .then((subject) => { res.json(subject); });
}

function getByCourse(req, res) {
  Subject.find({}).exec()
    .then(
      (subjects) => {
        const returnJSON = {
          Mon: [null, null, null, null, null, null, null],
          Tue: [null, null, null, null, null, null, null],
          Wed: [null, null, null, null, null, null, null],
          Thu: [null, null, null, null, null, null, null],
          Fri: [null, null, null, null, null, null, null],
        };
        subjects.forEach((subject) => {
          subject.course.forEach((type) => {
            // eslint-disable-next-line max-len
            if (req.query.course === type) returnJSON[subject.dayOfWeek][subject.period - 1] = { name: subject.name, _id: subject._id };
          });
        });
        res.json(returnJSON);
      });
}

function getByDayAndPeriod(req, res) {
  const period = parseInt(req.query.period, 10);
  const dayOfWeek = req.query.dayOfWeek;
  console.log(period);
  Subject.find({ period, dayOfWeek }, { course: 0, period: 0, dayOfWeek: 0 }).exec()
  .then(
    (subjects) => {
      res.json(subjects);
    });
}

module.exports = {
  get,
  _get,
  getByCourse,
  getByDayAndPeriod,
  getById,
};
