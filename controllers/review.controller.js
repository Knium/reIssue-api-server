const Review = require('../models/review.model');

function get(req, res) {
  Review.find({}).exec()
    .then(
      (reviews) => { res.json(reviews); });
}

module.exports = { get };
