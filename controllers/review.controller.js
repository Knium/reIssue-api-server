const Review = require('../models/review.model');
const ObjectId = require('mongoose').Types.ObjectId;

function get(req, res) {
  Review.find({}).exec()
    .then(
      (reviews) => { res.json(reviews); });
}

function create(req, res) {
  console.log(req.body);
  const review = new Review({
    subject: ObjectId(req.body.subject),
    created: Date.now(),
    reviewer: ObjectId(req.body.eviewer), // ちなみに君誰を格納するユーザのID
    title: req.body.title,
    text: req.body.text,
    star: req.body.star, // オススメ度的な,
    teacher: req.body.teacher,
    result: req.body.result, // そんな偉そうなレビュー書いてるけど君秀とったの？ 0 -> 不可, 1 -> 可, .. 4 -> 秀 という風な感じかな
  });
  review.save()
  .then(
    (savedReview) => { res.json(savedReview); });
}

function getReviewsBySubject(req, res) {
  Review.find({ subject: ObjectId(req.params.id) })
  .then(
    (reviews) => { res.json(reviews); });
}

module.exports = {
  get,
  create,
  getReviewsBySubject,
};
