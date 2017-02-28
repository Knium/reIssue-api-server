const User = require("../models/user.model");

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
    return res.json(req.user);
}

/**
 * Create new user
 * @returns {User}
 */
function create(req, res, next) {
    const body = req.body;
    const user = new User({
        username: body.username,
        completed: [],
        failedClass: [],
        created: Date.now()
    });

    user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

module.exports = { get, create };
