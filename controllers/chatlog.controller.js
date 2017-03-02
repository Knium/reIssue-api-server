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

function getBySubjectId(req, res) {
  console.log(req.params.subjectId);
  ChatLog.find({ subject: ObjectId(req.params.subjectId) }).exec()
  .then(
    (chatLogs) => { res.json(chatLogs); });
}

module.exports = {
  get,
  create,
  getBySubjectId,
};
