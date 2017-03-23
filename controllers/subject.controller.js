const Subject = require('../models/subject.model');

function get(req, res) {
  Subject.find({}).exec()
    .then(
      (subjects) => { res.json(subjects); });
}

function _get() {
  return Subject.find({}).exec();
}

function getByCourse(req, res) {
  console.log(req.body);
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
        subjects.map((subject) => {
          subject.course.map((type) => {
            if (req.query.course === type) returnJSON[subject.dayOfWeek][subject.period - 1] = { name: subject.name, _id: subject._id };
            });
        });
        res.json(returnJSON);
      });
}

function getByDayAndPeriod(req, res) {
  const period = parseInt(req.query.period, 10);
  const dayOfWeek = req.query.dayOfWeek;
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
};
