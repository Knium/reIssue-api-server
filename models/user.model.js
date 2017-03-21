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
  enteredYear: Number, // 入学年度
  course: String, // J I M S, K,  "1", "2", "3", "KN"
});

module.exports = mongoose.model('User', userSchema);
