const ChatLog = require('../models/chatlog.model');

function get(req, res) {
  ChatLog.find({}).exec()
  .then(
      (chatlogs) => {
        res.json(chatlogs);
      },
  );
}

module.exports = { get };
