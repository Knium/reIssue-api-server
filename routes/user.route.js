const express = require('express');
const userCtrl = require('../controllers/user.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(userCtrl.get)
    .post(userCtrl.create);

router.route('/:id')
  .get(userCtrl.getUserInfo);

module.exports = router;
