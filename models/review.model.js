const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;
const reviewSchema = new mongoose.Schema({
  subject: ObjectId,
  created: { type: Date, default: Date.now },
  reviewer: ObjectId, // ちなみに君誰を格納するユーザのID
  title: String,
  text: { type: String, required: true },
  star: Number, // オススメ度的な,
  teacher: String,
  result: Number, // そんな偉そうなレビュー書いてるけど君秀とったの？ 0 -> 不可, 1 -> 可, .. 4 -> 秀 という風な感じかな
});

module.exports = mongoose.model('Review', reviewSchema);

