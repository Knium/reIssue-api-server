const ChatLog = require('../models/chatlog.model');
const ObjectId = require('mongoose').Types.ObjectId;

function get(req, res) {
  ChatLog.find({}).exec()
  .then(
      (chatlogs) => { res.json(chatlogs); });
}

function create(id, text, speaker, speakerName) {
  const chat = new ChatLog({
    subject: ObjectId(id),
    created: Date.now(),
    speaker: ObjectId(speaker),
    text,
    speakerName,
  });
  chat.save();
}

function getBySubjectId(req, res) {
  ChatLog.find({ subject: ObjectId(req.params.subjectId) }).exec()
  .then(
    (chatLogs) => { res.json(chatLogs); });
}

module.exports = {
  get,
  create,
  getBySubjectId,
};
