const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;

const chatLogSchema = new mongoose.Schema({
  subject: ObjectId,
  created: { type: Date, default: Date.now },
  speaker: String, // 発言者
  text: { type: String, required: true },
});

module.exports = mongoose.model('ChatLog', chatLogSchema);
