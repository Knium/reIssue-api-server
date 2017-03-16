const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
  username: String,
  taking: { // 月曜1限の履修している科目を見るときは user.taking.mon[0] みたいな, 履修していないところはnullにする．
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
  },
  completed: [ObjectId],  // 取った科目
  failedClass: [ObjectId], // 落とした科目
  created: { type: Date, default: Date.now },
  enteredYear: Number, // 入学年度
  course: String, // J I M S, K,  "1", "2", "3", "KN"
  optionalCourse: [Number], // 最大4つまで，一つ目の要素は1年時のクラス，二つ目の要素は2年時のクラス，三つ目以降の要素は専攻コース
});

module.exports = mongoose.model('User', userSchema);
