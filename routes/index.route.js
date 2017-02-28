const express = require('express');
const userRouter = require('./user.route');
const subjectRouter = require('./subject.route');
const reviewRouter = require('./review.route');
const chatLogRouter = require('./chatlog.route');

const router = express.Router(); // eslint-disable-line new-cap
router.get('/', (req, res) => {
  res.json({ title: 'Express' });
});
router.use('/user', userRouter);
router.use('/subject', subjectRouter);
router.use('/review', reviewRouter);
router.use('/chatlog', chatLogRouter);

module.exports = router;
