const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;
const subjectSchema = new mongoose.Schema({
  name: String,
  teacher: String,
  taking: [ObjectId], // 誰が履修をしているか．各ユーザのObjectIDを要素にした配列
  pastReport: [String], // 過去レポのURL
  classRoom: String, // 教室名
  semester: Number, // 第何学期から履修できるのか 自然数 1年前期は1，1年後期は2, ... 4年後期は8といった風に
});

module.exports = mongoose.model('Subject', subjectSchema);
