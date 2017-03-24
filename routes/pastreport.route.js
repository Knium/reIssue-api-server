const pastReportCtrl = require('../controllers/pastreport.controller');
const express = require('express');
const multer = require('multer');

const router = express.Router(); // eslint-disable-line new-cap
const upload = multer({ dest: 'public/kakorepo' });

router.route('/')
    .get(pastReportCtrl.get)
    .post(upload.single('upName'), pastReportCtrl.upload);

router.route('/getbysubjectId')
  .get(pastReportCtrl.getBySubjectId);

module.exports = router;
