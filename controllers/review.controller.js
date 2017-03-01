const Review = require('../models/review.model');

function get(req, res) {
  Review.find({}).exec()
    .then(
      (reviews) => { res.json(reviews); });
}

function create(req, res) {
  const review = new Review({
    subject: req.subject,
    created: Date.now,
    reviewer: req.reviewer, // ちなみに君誰を格納するユーザのID
    title: req.title,
    text: req.text,
    star: req.star, // オススメ度的な,
    teacher: req.String,
    result: req.result, // そんな偉そうなレビュー書いてるけど君秀とったの？ 0 -> 不可, 1 -> 可, .. 4 -> 秀 という風な感じかな
  });
  review.save()
  .then(
    (savedReview) => { res.json(savedReview); });
}

module.exports = { get, create };
