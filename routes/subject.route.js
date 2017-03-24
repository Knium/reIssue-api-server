const express = require('express');
const subjectCtrl = require('../controllers/subject.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(subjectCtrl.get);

router.route('/getByCourse')
  .get(subjectCtrl.getByCourse);

router.route('/getByDayAndPeriod')
  .get(subjectCtrl.getByDayAndPeriod);

router.route('/:_id')
  .get(subjectCtrl.getById);


module.exports = router;
