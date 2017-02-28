const ChatLog = require('../models/chatlog.model');

function get(req, res) {
  return ChatLog.find({})
  .exec((err, chatlogs) => {
    res.json(chatlogs);
  });
}

module.exports = { get };
