const User = require('../models/user.model');

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  User.find({}).exec()
  .then((users) => { res.json(users); });
}

/**
 * Create new user
 * @returns {User}
 */
function create(req, res, next) {
    // todo: Twitter認証を超えたら登録できるようにする．
  const user = new User({
    username: req.username,
    taking: {
      Mon: [null, null, null, null, null, null, null],
      Tue: [null, null, null, null, null, null, null],
      Wed: [null, null, null, null, null, null, null],
      Thu: [null, null, null, null, null, null, null],
      Fri: [null, null, null, null, null, null, null],
      Sat: [null, null, null, null, null, null, null],
    },
    completed: [],
    failedClass: [],
    created: Date.now(),
  });

  user.save()
  .then(savedUser => res.json(savedUser))
  .catch(e => next(e));
}

module.exports = { get, create };
