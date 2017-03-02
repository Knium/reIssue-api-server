const express = require('express');
const chatLogRouter = require('../controllers/chatlog.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(chatLogRouter.get);

router.route('/:subjectId')
  .get(chatLogRouter.getBySubjectId);

module.exports = router;
