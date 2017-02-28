const express = require('express');
const reviewCtrl = require('../controllers/review.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(reviewCtrl.get);

module.exports = router;
