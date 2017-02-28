const express = require('express');
const subjectCtrl = require('../controllers/subject.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(subjectCtrl.get);

module.exports = router;
