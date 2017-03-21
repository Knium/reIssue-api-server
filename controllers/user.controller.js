const User = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

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
function create(req, res) {
    // todo: Twitter認証を超えたら登録できるようにする．
    console.log(req.body);
  const user = new User({
    username: req.body.username,
    taking: {},
    enteredYear: req.body.enteredYear,
    course: req.body.course,
  });

  user.save()
  .then((savedUser) => { res.json(savedUser); });
}

function getUserInfo(req, res) {
  User.findById({ _id: ObjectId(req.params.id) })
  .then(
    (user) => { res.json(user); });
}

function update(req, res) {
  User.update().exec()
  .then((result) => { res.json(result); });
}

module.exports = {
  get,
  create,
  getUserInfo,
  update,
};
