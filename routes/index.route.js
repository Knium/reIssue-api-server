const express = require('express');
const userRouter = require('./user.route');
const subjectRouter = require('./subject.route');

const router = express.Router(); // eslint-disable-line new-cap
router.get('/', (req, res) => {
  res.json({ title: 'Express' });
});
router.use('/user', userRouter);
router.use('/subject', subjectRouter);


module.exports = router;
