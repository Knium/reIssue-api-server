const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;

const chatLogSchema = new mongoose.Schema({
  subject: ObjectId,
  created: { type: Date, default: Date.now },
  speaker: ObjectId, // 発言者
  text: { type: String, required: true },
  speakerName: String,
});

module.exports = mongoose.model('ChatLog', chatLogSchema);
