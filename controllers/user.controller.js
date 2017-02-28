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
  const body = req.body;
  const user = new User({
    username: body.username,
    completed: [],
    failedClass: [],
    created: Date.now(),
  });

  user.save()
  .then(savedUser => res.json(savedUser))
  .catch(e => next(e));
}

module.exports = { get, create };
