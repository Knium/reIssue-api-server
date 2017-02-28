const Review = require('../models/review.model');

function get(req, res) {
  return Review.find({})
  .exec((err, reviews) => {
    res.json(reviews);
  });
}

module.exports = { get };
