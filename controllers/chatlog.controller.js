const ChatLog = require('../models/chatlog.model');
const ObjectId = require('mongoose').Types.ObjectId;

function get(req, res) {
  ChatLog.find({}).exec()
  .then(
      (chatlogs) => { res.json(chatlogs); });
}

function create(id, msg, speaker) {
  const chat = new ChatLog({
    subject: ObjectId(id),
    created: Date.now(),
    speaker: ObjectId(speaker),
    text: msg,
  });
  chat.save()
   .then(savedChat => console.log(savedChat))
   .catch(e => console.log(e));
}

module.exports = { get, create };
