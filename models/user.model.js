const mongoose = require('../config');

const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema({
  username: String,
  completed: [ObjectId],  // 取った科目
  failedClass: [ObjectId], // 落とした科目
  created: { type: Date, default: Date.now },
});

userSchema.statics = {
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ created: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  },
};

module.exports = mongoose.model('User', userSchema);
