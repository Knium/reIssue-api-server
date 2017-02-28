const mongoose = require('mongoose');

const config = {
  host: 'localhost',
  db: 'reIssue_dev',
};

mongoose.connect(`mongodb://${config.host}/${config.db}`);
module.exports = mongoose;
