const ChatLog = require('../models/chatlog.model');
const ObjectId = require('mongoose').SchemaTypes.ObjectId;

function get(req, res) {
  ChatLog.find({}).exec()
  .then(
      (chatlogs) => { res.json(chatlogs); });
}

function create(msg) {
  console.log(msg);
  const chat = new ChatLog({
    subject: ObjectId('58b5550314d5f1260bed8575'),
    created: Date.now(),
    speaker: ObjectId('58b5550314d5f1260bed8575'),
    text: msg,
  });
  chat.save()
   .then(savedChat => console.log(savedChat))
   .catch(e => console.log(e));
}

module.exports = { get, create };
